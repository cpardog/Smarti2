# DIGER - Sistema de Gestión de Riesgo

Aplicación web moderna con interfaz de menú profesional basada en React + Vite + TailwindCSS.
Este cambio se hizo desde el repositorio en internet no desde una maquina local . Ojo con estos cambios y los
Comandos para usarlos de manera correcta.
Nueva modificacion

## 🚀 Inicio Rápido

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

### Compilación para Producción
```bash
npm run build
```

## 📋 Características

- ✅ Menú principal con 7 secciones funcionales
- ✅ Dropdowns interactivos en cada opción
- ✅ Diseño responsivo y moderno
- ✅ Iconos profesionales con Lucide React
- ✅ Listo para agregar submenús personalizados
- ✅ Navegación fluida entre secciones

## 🎨 Estructura del Menú

1. **INICIO** - Página principal
2. **ABS LICENCIA HUMANITARIA** - Con dropdown
3. **GESTIÓN DE INVENTARIO** - Con dropdown
4. **GESTIÓN DIGITAL** - Con dropdown
5. **CONSULTAS** - Con dropdown
6. **CONFIGURACIÓN** - Con dropdown
7. **SEGURIDAD** - Con dropdown

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx       # Componente del menú principal
│   └── MainContent.jsx  # Contenido de cada sección
├── App.jsx              # Componente principal
├── main.jsx             # Punto de entrada
└── index.css            # Estilos globales
```

## ⚙️ Personalización de Submenús

Para agregar submenús a cualquier opción, edite el archivo `src/components/Navbar.jsx`:

```javascript
{
  id: 'nombre-seccion',
  icon: IconoComponente,
  label: 'NOMBRE SECCIÓN',
  hasDropdown: true,
  submenu: [
    { id: 'submenu-1', label: 'Submenú 1' },
    { id: 'submenu-2', label: 'Submenú 2' },
    // Agregar más submenús aquí
  ]
}
```

## 🎯 Tecnologías

- React 18
- Vite
- TailwindCSS
- Lucide React (iconos)
"# Smarti2" 
"# Smarti2" 


