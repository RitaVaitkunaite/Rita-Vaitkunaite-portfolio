Create a detailed implementation plan file in `.claude/ai/` for the current task.

The argument is a short kebab-case context label, e.g. `case-study-page` or `hero-redesign`.

The full argument is: $ARGUMENTS

Steps:
1. Run `uuidgen | tr '[:upper:]' '[:lower:]'` to generate a UUID.
2. Get today's date in `YYYY-MM-DD` format.
3. Create the file at `.claude/ai/YYYY-MM-DD-$ARGUMENTS-<uuid>.md`

The plan file must contain:

```markdown
# Plan: <human-readable title>

**Date:** YYYY-MM-DD
**UUID:** <uuid>
**Status:** TODO

---

## Context

<Why this work is being done. What problem it solves. Source files involved.>

---

## Completed Steps

<none yet — checkboxes will be added as steps complete>

---

## Remaining Steps

### Step N — <title>

**Files:** list of files to create or modify

<Detailed description of what to do, including exact component structure, prop interfaces,
CSS class names, logic, and any important decisions. Enough detail that a fresh Claude
session could execute this step without re-reading the conversation.>

---

## Notes / Decisions

<Architecture choices, edge cases, things to watch out for.>
```

After creating the file, print the full path so the user can see it, then stop and ask the user whether to proceed with implementation.

Do NOT start implementing until the user confirms.
