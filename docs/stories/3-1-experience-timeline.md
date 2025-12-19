# Story 3.1: Experience Timeline

Status: done

## Story

As a visitor,
I want to see Thang's work history,
so that I understand his professional experience.

## Acceptance Criteria

1. All 3 positions display chronologically
2. Each position shows company, role, period, achievements
3. Tech stack badges display for each position
4. Hover animations work on cards
5. Timeline visual design with gradient line

## Tasks / Subtasks

- [x] Task 1: Create Experience component (AC: 1, 2)
  - [x] Create src/components/Experience.tsx
  - [x] Map experiences from data.ts
  - [x] Display Arobid, Amazing Tech, FPT Software

- [x] Task 2: Build timeline design (AC: 5)
  - [x] Create vertical timeline line
  - [x] Add gradient coloring
  - [x] Position cards alternately

- [x] Task 3: Add tech badges (AC: 3)
  - [x] Use tech-badge class
  - [x] Display tech array for each position

- [x] Task 4: Add hover effects (AC: 4)
  - [x] Implement card lift on hover
  - [x] Add Framer Motion whileHover

## Dev Notes

- Timeline alternates left/right on desktop
- Single column on mobile
- Uses scroll animation hook for reveal

### Data Structure

```typescript
experiences = [
  { company: 'Arobid', role: 'Front-End Developer', ... },
  { company: 'Amazing Tech', role: 'Front-end Developer', ... },
  { company: 'FPT Software', role: 'Intern', ... }
]
```

### References

- [Source: epics.md#Story-3.1]
- [Source: data.ts - experiences]

## Dev Agent Record

### Agent Model Used

Claude (Antigravity)

### Completion Notes List

- Timeline renders with all 3 positions
- Hover effects working
- Responsive layout verified

### File List

- src/components/Experience.tsx
- src/data/data.ts (experiences array)
