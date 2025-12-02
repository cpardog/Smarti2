# Guía de Deployment - DIGER App en Namecheap

## 📦 Archivos Listos para Producción

La carpeta `dist/` contiene todo lo necesario:
```
dist/
├── .htaccess          (configuración Apache)
├── index.html         (página principal)
└── assets/
    ├── index-102a7c9e.js   (JavaScript optimizado)
    └── index-4abfa115.css  (CSS optimizado)
```

## 🚀 Pasos para Subir a Namecheap

### Método 1: cPanel File Manager (Recomendado)

1. **Acceder a cPanel**
   - Ve a: `https://tu-dominio.com/cpanel`
   - O desde tu panel de Namecheap → cPanel

2. **Abrir File Manager**
   - Busca "File Manager" en cPanel
   - Haz clic para abrirlo

3. **Navegar a la carpeta correcta**
   - Ve a `public_html/` (para dominio principal)
   - O a la subcarpeta específica de tu dominio

4. **Limpiar archivos antiguos (si existen)**
   - Selecciona todos los archivos antiguos
   - Elimínalos (¡CUIDADO! Asegúrate de estar en la carpeta correcta)

5. **Subir archivos nuevos**
   - Haz clic en "Upload" en el File Manager
   - Arrastra TODOS los archivos de `dist/`:
     * `.htaccess`
     * `index.html`
     * Carpeta `assets/` completa
   - Espera a que termine la carga (verifica 100%)

6. **Verificar permisos**
   - Archivos: 644
   - Carpetas: 755
   - El `.htaccess` debe ser visible (muestra archivos ocultos si no lo ves)

### Método 2: FTP/SFTP (Alternativo)

**Configuración FTP en Namecheap:**

1. **Obtener credenciales FTP**
   - En cPanel → "FTP Accounts"
   - Crea una cuenta FTP si no tienes una
   - Anota: Host, Usuario, Contraseña, Puerto

2. **Usar FileZilla (o similar)**
   ```
   Host: ftp.tu-dominio.com
   Usuario: tu-usuario@tu-dominio.com
   Contraseña: tu-contraseña
   Puerto: 21 (FTP) o 22 (SFTP)
   ```

3. **Subir archivos**
   - Conecta a tu servidor
   - Lado remoto: navega a `public_html/`
   - Lado local: abre la carpeta `dist/`
   - Selecciona TODO el contenido de `dist/` y súbelo
   - ⚠️ **IMPORTANTE**: Sube el CONTENIDO de dist, no la carpeta dist

### Método 3: Línea de Comandos (Avanzado)

```bash
# Usando FTP desde PowerShell
# 1. Instalar WinSCP o usar FTP nativo

# Ejemplo con SFTP:
sftp usuario@tu-dominio.com
cd public_html
lcd C:\Smarti2\dist
put -r *
```

## ✅ Verificación Post-Deployment

1. **Verificar archivos subidos**
   - Accede a File Manager en cPanel
   - Confirma que `public_html/` contiene:
     * `.htaccess`
     * `index.html`
     * `assets/` (con archivos JS y CSS)

2. **Probar la aplicación**
   - Abre: `https://tu-dominio.com`
   - Verifica que carga correctamente
   - Prueba la navegación (las rutas de React deben funcionar)

3. **Verificar en diferentes navegadores**
   - Chrome
   - Firefox
   - Safari
   - Edge

## 🔧 Solución de Problemas

### Problema: Página en blanco
**Solución:**
- Verifica la consola del navegador (F12)
- Asegúrate de que `.htaccess` esté presente
- Verifica que los archivos en `assets/` se carguen correctamente

### Problema: Error 404 en rutas
**Solución:**
- Confirma que `.htaccess` está en `public_html/`
- Verifica que el módulo `mod_rewrite` esté habilitado en Apache
- Contacta soporte de Namecheap si persiste

### Problema: Archivos no se ven
**Solución:**
- En File Manager, habilita "Show Hidden Files"
- Verifica los permisos: archivos 644, carpetas 755

### Problema: CSS/JS no cargan
**Solución:**
- Verifica las rutas en `index.html`
- Asegúrate de que la carpeta `assets/` esté completa
- Limpia caché del navegador (Ctrl + Shift + R)

## 🔄 Actualizar la Aplicación

Para futuras actualizaciones:

```bash
# 1. Hacer cambios en el código
# 2. Reconstruir
npm run build

# 3. Subir solo los archivos cambiados
# (o todos si prefieres)
```

## 📝 Checklist Final

- [ ] Carpeta `dist/` contiene todos los archivos
- [ ] Archivo `.htaccess` está presente
- [ ] Acceso a cPanel configurado
- [ ] Archivos subidos a `public_html/`
- [ ] Permisos correctos (644/755)
- [ ] Aplicación probada en navegador
- [ ] Rutas de React funcionan
- [ ] Sin errores en consola del navegador

## 🆘 Contacto Soporte Namecheap

Si necesitas ayuda adicional:
- Chat en vivo: https://www.namecheap.com/support/live-chat/
- Tickets: Panel de Namecheap → Support
- KB: https://www.namecheap.com/support/knowledgebase/

---

**¡Tu aplicación DIGER está lista para producción! 🎉**
