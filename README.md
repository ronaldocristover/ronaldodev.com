# Ronaldo Cristover Octavianus - 16-Bit Pixel Art Portfolio

A Vue.js portfolio website with an authentic 16-bit pixel art theme, perfect for showcasing software engineering skills and projects.

## 🎮 **16-Bit Pixel Art Features**

### **Visual Design**
- **Authentic 16-Bit Aesthetic**: True pixel-perfect design with crisp edges and retro gaming colors
- **Pixel Art Elements**: Sharp, geometric shapes with pixel-perfect borders and gradients
- **Enhanced Glitch Effects**: Multi-layered glitch animations with RGB color separation
- **Animated Scan Lines**: Moving CRT monitor effect for authentic retro feel
- **Pixel Art Cursor**: Custom 16-bit style cursor
- **Loading Animation**: Retro-style loading screen with fade effects

### **Color Palette**
- **Primary Green**: `#00ff00` - Classic terminal green
- **Accent Colors**: Blue, Red, Yellow, Purple, Cyan for vibrant contrast
- **Background**: Deep blacks and dark grays for authentic retro look

### **Animations & Effects**
- **Glitch Text**: Multi-layered glitch effects on titles
- **Pixel Pulse**: Animated pixel character with particle effects
- **Hover Effects**: Interactive buttons and cards with pixel-perfect transitions
- **Scan Lines**: Moving horizontal lines for CRT effect
- **Particle Float**: Floating particles around the hero character

## 📁 **Data Structure**

All content is now managed through `src/data/portfolio.json` for easy maintenance:

```json
{
  "personal": {
    "name": "RONALDO CRISTOVER OCTAVIANUS",
    "title": "Software Engineer with 10+ years of experience",
    "email": "ronaldochristover@gmail.com",
    "phone": "+6282121180999",
    "location": "Bandung, Indonesia",
    "logo": "RONALDO"
  },
  "about": {
    "sections": [...]
  },
  "skills": {
    "categories": [...]
  },
  "projects": [...],
  "contact": {...},
  "navigation": [...]
}
```

### **Easy Maintenance**
- **Update Personal Info**: Modify `personal` object in JSON
- **Add Projects**: Add new objects to `projects` array
- **Update Skills**: Modify `skills.categories` array
- **Change Content**: Edit any section content in JSON
- **Add Sections**: Extend navigation and add new sections

## 🚀 **Technical Features**

### **Vue.js 3**
- **Reactive Components**: Dynamic data binding with JSON
- **Component Architecture**: Modular and maintainable code
- **Vite Build System**: Lightning-fast development and builds

### **CSS Features**
- **CSS Custom Properties**: Easy theme customization
- **Pixel-Perfect Rendering**: `image-rendering: pixelated`
- **Advanced Animations**: Keyframe animations with easing
- **Responsive Design**: Mobile-first approach

### **Performance**
- **Optimized Assets**: Minimal bundle size
- **Fast Loading**: Efficient code splitting
- **Smooth Animations**: Hardware-accelerated CSS transforms

## 📱 **Responsive Design**

- **Desktop**: Full 16-bit experience with all effects
- **Tablet**: Optimized layout with maintained pixel art style
- **Mobile**: Simplified navigation with touch-friendly interactions

## 🛠 **Development**

### **Installation**
```bash
npm install
```

### **Development Server**
```bash
npm run dev
```

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

## 🎨 **Customization**

### **Colors**
Edit CSS custom properties in `src/style.css`:
```css
:root {
  --primary-green: #00ff00;
  --accent-blue: #0080ff;
  --accent-red: #ff0000;
  /* Add more colors as needed */
}
```

### **Content**
Update `src/data/portfolio.json` to modify:
- Personal information
- Project details
- Skills and technologies
- Contact information
- Navigation items

### **Animations**
Modify animation keyframes in `src/style.css`:
- Glitch effects
- Pixel pulse animations
- Scan line effects
- Particle animations

## 📋 **Sections**

1. **Hero Section** - Animated introduction with pixel art character
2. **About** - Three cards with personal information
3. **Skills** - Organized by categories with hover effects
4. **Projects** - Portfolio showcase with technology tags
5. **Contact** - Interactive form and contact details

## 🔧 **Technologies Used**

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Next-generation build tool
- **CSS3** - Advanced styling with custom properties
- **JSON** - Data management and configuration
- **Press Start 2P** - Authentic 8-bit font

## 📄 **License**

MIT License - Feel free to use this template for your own portfolio!

---

**Created with ❤️ and lots of pixels**
