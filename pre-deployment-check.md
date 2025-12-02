# ✅ Checklist Pre-Deployment

## Archivos que debes subir a Namecheap

Desde la carpeta `C:\Smarti2\dist\`, sube TODOS estos archivos a `public_html/`:

```
📁 public_html/
├── 📄 .htaccess              ← ¡IMPORTANTE! (archivo oculto)
├── 📄 index.html
└── 📁 assets/
    ├── 📄 index-102a7c9e.js
    └── 📄 index-4abfa115.css
```

## Verificación Rápida

### ¿Tienes acceso a cPanel?
- [ ] Sí, tengo usuario y contraseña
- [ ] Sé la URL: `https://servidor.namecheap.com/cpanel` o `https://tudominio.com/cpanel`

### ¿Conoces tu dominio?
- [ ] Dominio principal: _________________
- [ ] URL final donde estará: https://_________________

### ¿Todos los archivos están listos?
Verifica en `C:\Smarti2\dist\`:
- [ ] Archivo `.htaccess` existe (puede estar oculto en Windows)
- [ ] Archivo `index.html` existe
- [ ] Carpeta `assets` existe con 2 archivos dentro

## 🚦 Pasos Simples

### PASO 1: Preparar
```
✓ Archivos listos en: C:\Smarti2\dist\
✓ Guía completa en: C:\Smarti2\DEPLOYMENT_GUIDE.md
```

### PASO 2: Acceder
1. Abre tu navegador
2. Ve a tu cPanel de Namecheap
3. Busca "File Manager"
4. Abre `public_html/`

### PASO 3: Subir
1. Haz clic en "Upload"
2. Arrastra TODO de `C:\Smarti2\dist\`
3. Espera que termine (100%)
4. Verifica que `.htaccess` esté presente

### PASO 4: Verificar
1. Abre: `https://tudominio.com`
2. ¿Carga la aplicación DIGER?
   - ✅ SÍ → ¡Listo! 🎉
   - ❌ NO → Revisa DEPLOYMENT_GUIDE.md sección "Solución de Problemas"

## 📞 ¿Necesitas ayuda?

Si algo no funciona:
1. Lee la sección de problemas comunes en `DEPLOYMENT_GUIDE.md`
2. Contacta soporte de Namecheap (chat en vivo)
3. Verifica que `.htaccess` esté en la carpeta correcta

---

**¡Estás a solo unos clics de tener tu app en producción!** 🚀
