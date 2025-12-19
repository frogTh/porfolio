# Story 2.1: Hero Section

Status: done

## Story

As a visitor,
I want to see an impressive hero section,
so that I get a strong first impression of Thang.

## Acceptance Criteria

1. Animated gradient background displays
2. Name with gradient text effect
3. CTA buttons visible (View My Work, Get In Touch)
4. Social links work (GitHub, LinkedIn, Email)
5. Scroll indicator animation

## Tasks / Subtasks

- [x] Task 1: Create Hero component (AC: 1, 2)
  - [x] Create src/components/Hero.tsx
  - [x] Implement animated gradient background
  - [x] Add name with gradient-text class

- [x] Task 2: Add social links (AC: 4)
  - [x] Add GitHub, LinkedIn, Email icons
  - [x] Link to correct URLs

- [x] Task 3: Add CTA buttons (AC: 3)
  - [x] Create "View My Work" button
  - [x] Create "Get In Touch" button

- [x] Task 4: Add scroll indicator (AC: 5)
  - [x] Animate chevron down icon

## Dev Notes

- Used Framer Motion for stagger animations
- Animated background with floating blurred circles
- Social icons from react-icons/fa

### References

- [Source: epics.md#Story-2.1]
- [Source: data.ts - personalInfo]

## Dev Agent Record

### Agent Model Used

Claude (Antigravity)

### Completion Notes List

- Hero component renders correctly
- Animations smooth on load
- All links functional

### File List

- src/components/Hero.tsx
- src/data/data.ts (personalInfo)
- src/utils/animations.ts (staggerContainer, staggerItem)
