---
title: Color
description: The color system provides semantic tokens for consistent and accessible interfaces.
navLabel: Color
order: 2
type: foundation
category: color
---

## Color Philosophy

Our color system is designed to be:

- **Accessible**: All color combinations meet WCAG 2.1 AA contrast requirements
- **Semantic**: Colors are named by purpose, not appearance
- **Consistent**: The same tokens are used across all components
- **Themeable**: Colors adapt automatically to light and dark modes

## Primary Colors

The primary color palette represents the Azion brand:

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--color-primary-50` | `#eff6ff` | `#1e3a8a` | Light backgrounds |
| `--color-primary-100` | `#dbeafe` | `#1e40af` | Hover states |
| `--color-primary-500` | `#3b82f6` | `#3b82f6` | Primary actions |
| `--color-primary-700` | `#1d4ed8` | `#60a5fa` | Active states |
| `--color-primary-900` | `#1e3a8a` | `#93c5fd` | Text on light |

## Semantic Colors

Semantic colors convey meaning:

### Success
Used for positive actions and confirmations.

### Warning
Used for cautionary messages and alerts.

### Error
Used for error states and destructive actions.

### Info
Used for informational messages and neutral states.

## Usage Guidelines

### Do
- Use semantic tokens instead of raw color values
- Ensure sufficient contrast for text
- Use color consistently across similar elements

### Don't
- Don't use color alone to convey information
- Don't create new colors outside the system
- Don't use decorative colors that distract from content

## Related

- [Typography](/foundations/typography) - Typography system
- [Tokens](/tokens) - Design token reference
