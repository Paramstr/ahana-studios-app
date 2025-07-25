# Ahana Studios Design Guidelines

> Comprehensive design system documentation for AI development studio interface

## Overview

Ahana Studios follows a **minimalist, monochromatic design philosophy** that emphasizes clarity, elegance, and sophistication. The design language prioritizes content hierarchy, subtle animations, and clean typography to create a professional yet approachable experience for enterprise AI clients.

---

## Color Palette

### Primary Colors
```css
--background: #ffffff     /* Pure white background */
--foreground: #000000     /* Pure black text */
--text-secondary: #666666 /* Medium gray for secondary text */
--text-tertiary: #999999  /* Light gray for tertiary text */
--border-subtle: #f5f5f5  /* Very light gray for borders */
```

### Semantic Color Usage

| Color | Usage | CSS Classes |
|-------|--------|-------------|
| `#000000` (Black) | Primary text, buttons, icons, active states | `text-black`, `bg-black` |
| `#ffffff` (White) | Backgrounds, button text on dark backgrounds | `text-white`, `bg-white` |
| `#666666` (Medium Gray) | Secondary text, descriptions | `text-gray-600` |
| `#999999` (Light Gray) | Tertiary text, placeholders | `text-gray-500` |
| `#f5f5f5` (Very Light Gray) | Subtle borders, dividers | `border-gray-100` |
| `#f9f9f9` (Off White) | Section backgrounds, cards | `bg-gray-50` |

### Color Philosophy
- **Monochromatic Excellence**: Strictly black, white, and grayscale only
- **High Contrast**: Ensures accessibility and readability
- **Timeless Appeal**: No trendy colors that might date the design
- **Focus on Content**: Colors never compete with information hierarchy

---

## Typography

### Font Family
```css
font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
```

### Font Weights
- **Light (300)**: Large headlines, display text
- **Regular (400)**: Body text, descriptions  
- **Medium (500)**: Subheadings, emphasis
- **SemiBold (600)**: Secondary headings
- **Bold (700)**: Rare use, special emphasis

### Type Scale

#### Display & Headlines
```css
/* Hero Headlines */
.text-8xl  /* 96px */ - Hero section main headlines
.text-7xl  /* 72px */ - Page hero headlines  
.text-6xl  /* 60px */ - Section headers (large screens)
.text-5xl  /* 48px */ - Section headers (medium screens)
.text-4xl  /* 36px */ - Section headers (small screens)
.text-3xl  /* 30px */ - Card headlines, subsection headers
```

#### Body & Interface
```css
.text-2xl  /* 24px */ - Card titles, team member names
.text-xl   /* 20px */ - Large body text, descriptions
.text-lg   /* 18px */ - Standard body text
.text-base /* 16px */ - Default body text
.text-sm   /* 14px */ - Secondary text, captions
.text-xs   /* 12px */ - Labels, tags, fine print
```

### Typography Principles
- **Font Weight Hierarchy**: Light for headlines, Regular for body, Medium+ for emphasis
- **Line Height**: Always `leading-tight` for headlines, `leading-relaxed` for body text
- **Letter Spacing**: `tracking-tight` for large text, default for body
- **Text Balance**: Use `text-balance` utility for headline wrapping

### Sample Typography Combinations
```jsx
// Hero Headline
<h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-black leading-[0.85] tracking-tight">

// Section Header  
<h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight">

// Card Title
<h3 className="text-xl md:text-2xl font-semibold text-black leading-tight">

// Body Text
<p className="text-lg md:text-xl text-gray-600 leading-relaxed">

// Secondary Text
<p className="text-base text-gray-700 leading-relaxed">
```

---

## Spacing System

### Padding & Margins
```css
/* Page-level spacing */
px-6 md:px-12 lg:px-16 xl:px-20    /* Horizontal page margins */
py-12 md:py-16 lg:py-20 xl:py-24   /* Section vertical spacing */
py-16 md:py-20 lg:py-24 xl:py-28   /* Large section spacing */

/* Component spacing */
mb-6, mb-8                         /* Standard bottom margins */
gap-8 md:gap-12                    /* Grid gaps */
gap-12 lg:gap-16 xl:gap-20         /* Large grid gaps */
space-y-8 md:space-y-12            /* Vertical stack spacing */
```

### Responsive Breakpoints
- **Mobile**: Base styles (no prefix)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

### Spacing Philosophy
- **Progressive Enhancement**: Spacing increases on larger screens
- **Consistent Rhythm**: Use increments of 4, 6, 8, 12, 16, 20, 24
- **Breathing Room**: Generous whitespace for premium feel
- **Responsive Scaling**: Tighter spacing on mobile, more generous on desktop

---

## Layout Patterns

### Page Structure
```jsx
<div className="min-h-screen bg-white">
  {/* Navbar - sticky positioned */}
  <header className="sticky top-0 z-50 border-b border-gray-100">
  
  {/* Main Content */}
  <main className="px-6 md:px-12 lg:px-16 xl:px-20">
    
    {/* Hero Section */}
    <section className="py-12 md:py-16 lg:py-20 xl:py-24">
    
    {/* Content Sections */}
    <section className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100">
    
  </main>
  
  {/* Footer Spacing */}
  <div className="h-12 md:h-16 lg:h-20 xl:h-24"></div>
</div>
```

### Grid Systems
```jsx
// Standard content grid
<div className="max-w-6xl mx-auto">
<div className="max-w-7xl mx-auto">

// 2-column layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

// 3-column layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">

// 12-column system
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
  <div className="lg:col-span-8">    <!-- Main content -->
  <div className="lg:col-span-4">    <!-- Sidebar -->
```

### Container Patterns
- **Content Width**: `max-w-6xl` or `max-w-7xl` with `mx-auto`
- **Text Width**: `max-w-3xl` or `max-w-4xl` for readable line lengths
- **Grid Gaps**: Progressive from `gap-8` to `gap-16` based on screen size

---

## Component Patterns

### Buttons

#### Primary Button
```jsx
<button className="bg-black text-white px-8 py-3 text-sm font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105">
  Button Text
</button>
```

#### Secondary Button  
```jsx
<button className="border border-black text-black px-8 py-3 text-sm font-medium tracking-tight hover:bg-black hover:text-white transition-all duration-200">
  Button Text
</button>
```

#### Large CTA Button
```jsx
<button className="bg-black text-white px-12 py-4 text-base font-medium tracking-tight hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  Call to Action
</button>
```

### Cards

#### Standard Card
```jsx
<div className="border border-gray-100 hover:border-gray-200 transition-all duration-300">
  <div className="p-8 md:p-12">
    {/* Card content */}
  </div>
</div>
```

#### Feature Card with Hover Effect
```jsx
<div className="group cursor-pointer">
  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6 transition-all duration-500 group-hover:scale-[1.02]">
    <Image className="transition-all duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
  </div>
</div>
```

### Interactive Elements

#### Expandable Sections
```jsx
// Toggle Icon
<motion.div
  animate={{ rotate: isExpanded ? 45 : 0 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  <svg><!-- Plus icon --></svg>
</motion.div>

// Expandable Content
<AnimatePresence>
  {isExpanded && (
    <motion.div
      initial={{ opacity: 0, height: 0, y: -10 }}
      animate={{ opacity: 1, height: "auto", y: 0 }}
      exit={{ opacity: 0, height: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
```

#### Progress Indicators
```jsx
// Timeline Progress
<div className="absolute left-8 top-0 w-px h-full bg-gray-200"></div>
<motion.div 
  className="absolute left-8 top-0 w-px bg-black"
  initial={{ height: 0 }}
  animate={{ height: `${progress}%` }}
  transition={{ duration: 1.5, ease: "easeOut" }}
/>
```

### Navigation Patterns

#### Active States
```jsx
// Navigation Link
<Link className={`relative group ${
  isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"
}`}>
  {label}
  <span className={`absolute -bottom-1 left-0 h-px bg-black transition-all duration-300 ${
    isActive ? "w-full" : "w-0 group-hover:w-full"
  }`}></span>
</Link>
```

---

## Animation Principles

### Framer Motion Configuration
```jsx
// Standard entrance animation
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

// Staggered list animations  
transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}

// Hover interactions
whileHover={{ y: -2, scale: 1.02 }}
transition={{ duration: 0.3, ease: "easeOut" }}
```

### Animation Timing
- **Duration**: 0.3s for micro-interactions, 0.6-0.8s for entrances
- **Delay**: Stagger by 0.1s increments for list items
- **Easing**: `easeOut` for most animations, `easeInOut` for toggles
- **Hover Effects**: Quick 0.2-0.3s transitions

### Scroll Animations
```jsx
// useInView hook for scroll triggers
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

// Progressive animation for content sections
<motion.section 
  ref={ref}
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
```

### Animation Philosophy
- **Subtle & Refined**: Never distracting from content
- **Performance-First**: Use transforms over layout properties
- **Purposeful Motion**: Every animation has a functional purpose
- **Consistent Easing**: Unified feel across all interactions

---

## Image & Media Guidelines

### Image Ratios
```jsx
// Standard feature images
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100">

// Portrait images (team photos)
<div className="relative aspect-[4/5] overflow-hidden bg-gray-100">

// Square images (avatars, icons)
<div className="relative aspect-square overflow-hidden bg-gray-100">
```

### Image Treatment
- **Background Color**: Always `bg-gray-100` for loading states
- **Hover Effects**: Subtle scale transforms (1.02-1.05)
- **Overlays**: `bg-black/5` or `bg-black/10` for hover states
- **Loading**: Use Next.js Image component with proper sizing

### Visual Hierarchy
- **Image Priority**: Hero images and above-fold content
- **Lazy Loading**: Automatic with Next.js Image component
- **Responsive Sizing**: Use `sizes` prop for optimization

---

## Responsive Design

### Mobile-First Approach
```jsx
// Start with mobile base, enhance for larger screens
className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
className="px-6 md:px-12 lg:px-16 xl:px-20"
className="py-12 md:py-16 lg:py-20 xl:py-24"
```

### Breakpoint Strategy
- **Mobile (Default)**: Single column, minimal spacing
- **Tablet (md:)**: 2-column grids, increased spacing
- **Desktop (lg:)**: 3+ column grids, full spacing
- **Large (xl:)**: Maximum content width, generous spacing

### Touch Interactions
- **Button Sizing**: Minimum 44px touch targets
- **Hover States**: Only on devices that support hover
- **Mobile Navigation**: Hamburger menu for mobile screens

---

## Accessibility Standards

### Color Contrast
- **Text on White**: Pure black (#000000) provides maximum contrast
- **Gray Text**: Medium gray (#666666) maintains 7:1 contrast ratio
- **Interactive Elements**: Clear focus states and hover indicators

### Typography Accessibility
- **Font Size**: Minimum 16px for body text
- **Line Height**: 1.6 for optimal readability
- **Font Weight**: Sufficient contrast between weights

### Interactive Elements
- **Focus States**: Visible focus indicators on all interactive elements
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Alternative Text**: Descriptive alt text for all images

---

## Code Patterns & Best Practices

### Component Structure
```jsx
export default function ComponentName() {
  // Animation refs
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // State management
  const [activeItem, setActiveItem] = useState(0);
  
  return (
    <motion.section 
      ref={ref}
      className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Component content */}
        </motion.div>
      </div>
    </motion.section>
  );
}
```

### Naming Conventions
- **Components**: PascalCase (`TeamMember`, `ServiceCard`)
- **Props**: camelCase (`isActive`, `expandedItem`)  
- **CSS Classes**: Tailwind utilities, no custom classes
- **Animation Refs**: Descriptive names (`heroRef`, `servicesRef`)

### State Management
- **Local State**: useState for component-specific interactions
- **Animation State**: Separate boolean states for different sections
- **Event Handlers**: Consistent naming pattern (`handleClick`, `onToggle`)

---

## Performance Guidelines

### Image Optimization
```jsx
// Always use Next.js Image component
<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### Animation Performance
- **Use transforms**: Prefer `x`, `y`, `scale` over layout properties
- **Limit simultaneous animations**: Stagger complex animations
- **Cleanup**: Always cleanup animation listeners and timeouts

### Bundle Optimization
- **Dynamic imports**: Lazy load heavy components
- **Image formats**: Use WebP and modern formats
- **Font loading**: Optimize font loading with `display: 'swap'`

---

## Design Tokens

### Spacing Scale
```css
/* Tailwind spacing tokens used throughout */
0.5rem   /* 2  - py-2, px-2 */
0.75rem  /* 3  - py-3, px-3 */
1rem     /* 4  - py-4, px-4 */
1.5rem   /* 6  - py-6, px-6 */
2rem     /* 8  - py-8, px-8 */
3rem     /* 12 - py-12, px-12 */
4rem     /* 16 - py-16, px-16 */
5rem     /* 20 - py-20, px-20 */
6rem     /* 24 - py-24, px-24 */
```

### Border Radius
```css
/* Minimal border radius usage */
rounded-none    /* 0px - Default for most elements */
rounded-full    /* 50% - Circular elements only */
rounded-lg      /* 8px - Rare use for cards */
```

### Shadows
```css
/* Minimal shadow usage */
hover:shadow-xl /* Only for hover states on CTA buttons */
/* No default shadows - maintains clean, flat aesthetic */
```

---

## Content Guidelines

### Tone of Voice
- **Professional yet Approachable**: Sophisticated without being intimidating
- **Clear and Concise**: Direct communication, minimal jargon
- **Future-Focused**: Emphasize innovation and transformation
- **Human-Centered**: AI that amplifies human potential

### Content Hierarchy
1. **Headlines**: Clear, benefit-focused statements
2. **Subheadings**: Explanatory, context-setting
3. **Body Text**: Detailed, informative paragraphs
4. **Captions**: Brief, contextual information
5. **Labels**: Functional, descriptive text

### Messaging Patterns
- **Problem → Solution → Outcome**: Standard case study structure
- **Vision → Execution → Results**: Service explanation format
- **Challenge → Innovation → Impact**: Technology narrative arc

---

## Testing & Quality Assurance

### Visual Regression Testing
- **Component Screenshots**: Test all states and variations
- **Responsive Testing**: Verify layouts across all breakpoints
- **Animation Testing**: Ensure smooth performance on various devices

### Accessibility Testing
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Testing**: Proper semantic structure and ARIA labels
- **Color Contrast**: Verify compliance with WCAG 2.1 AA standards

### Performance Metrics
- **Lighthouse Scores**: Target 90+ on all metrics
- **Core Web Vitals**: Optimize for LCP, FID, and CLS
- **Bundle Size**: Monitor and optimize JavaScript bundles

---

## Future Considerations

### Scalability
- **Component Library**: Consistent patterns enable easy component extraction
- **Design System**: Foundation ready for more complex UI requirements
- **Themability**: Color system could support dark mode in future

### Extensibility  
- **Animation Library**: Framer Motion provides room for more complex interactions
- **Layout Patterns**: Grid system supports various content types
- **Component Variants**: Current patterns allow for easy variation creation

This design system prioritizes **timeless elegance over trending aesthetics**, ensuring the Ahana Studios brand maintains its sophisticated, professional appeal while remaining highly functional and accessible across all devices and user needs. 