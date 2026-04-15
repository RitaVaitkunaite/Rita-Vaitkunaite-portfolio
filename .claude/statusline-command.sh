#!/usr/bin/env bash
input=$(cat)

# Git branch
branch=$(git -C "$(echo "$input" | jq -r '.workspace.current_dir')" --no-optional-locks symbolic-ref --short HEAD 2>/dev/null)
[ -z "$branch" ] && branch=$(git -C "$(echo "$input" | jq -r '.workspace.current_dir')" --no-optional-locks rev-parse --short HEAD 2>/dev/null)

# Context window usage
used=$(echo "$input" | jq -r '.context_window.current_tokens // .context_window.total_input_tokens // 0')
limit=$(echo "$input" | jq -r '.context_window.limit // 200000')

# Percentage (capped at 100)
pct=$(awk "BEGIN { v = int($used / $limit * 100); print (v > 100 ? 100 : v) }")

# Progress bar (20 chars wide)
bar_width=20
filled=$(awk "BEGIN { print int($pct / 100 * $bar_width) }")
empty=$(( bar_width - filled ))

bar=""
for ((i = 0; i < filled; i++)); do bar="${bar}█"; done
for ((i = 0; i < empty; i++)); do bar="${bar}░"; done

# Color: green < 50%, yellow 50–80%, red > 80%
if   [ "$pct" -ge 80 ]; then color="\033[31m"   # red
elif [ "$pct" -ge 50 ]; then color="\033[33m"   # yellow
else                          color="\033[32m"   # green
fi
reset="\033[0m"

# Model: project settings → global settings → default
project_dir="$(echo "$input" | jq -r '.workspace.current_dir // ""')"
model=$(jq -r '.model // empty' "${project_dir}/.claude/settings.json" 2>/dev/null)
[ -z "$model" ] && model=$(jq -r '.model // empty' "$HOME/.claude/settings.json" 2>/dev/null)
[ -z "$model" ] && model="sonnet"

# Branch segment
branch_part=""
[ -n "$branch" ] && branch_part="  $branch"

printf "${color}[%s] %3d%%${reset}  %s%s" "$bar" "$pct" "$model" "$branch_part"
