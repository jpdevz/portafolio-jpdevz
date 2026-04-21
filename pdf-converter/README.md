# PDF to Markdown Converter

Una aplicación web Flask simple que convierte archivos PDF a formato Markdown utilizando la librería `pdf-inspector` de Firecrawl.

## Características

- 🎨 Interfaz moderna y minimalista con diseño oscuro
- 📤 Área de Drag & Drop para subir archivos PDF
- 📊 Barra de progreso durante el procesamiento
- 📝 Panel dividido con información del archivo y resultado Markdown
- 📋 Botón para copiar el resultado al portapapeles
- ⚠️ Manejo de errores para archivos no válidos
- 🚀 Construido con Flask y Tailwind CSS

## Requisitos Previos

- Python 3.8 o superior
- Rust (se instalará automáticamente mediante el script de configuración)

## Instalación

1. Navega al directorio del proyecto:
```bash
cd pdf-converter
```

2. Ejecuta el script de configuración:
```bash
./setup.sh
```

Este script:
- Instala Rust si no está presente
- Crea un entorno virtual de Python
- Instala maturin (requerido para pdf-inspector)
- Instala pdf-inspector y Flask

## Uso

1. Activa el entorno virtual:
```bash
source venv/bin/activate
```

2. Inicia el servidor Flask:
```bash
python app.py
```

3. Abre tu navegador en `http://localhost:5000`

4. Arrastra y suelta un archivo PDF o selecciona uno usando el botón
5. El Markdown resultante aparecerá en el panel derecho
6. Usa el botón "Copiar" para copiar el resultado al portapapeles

## Estructura del Proyecto

```
pdf-converter/
├── app.py              # Servidor Flask con rutas / y /convert
├── setup.sh            # Script de configuración del entorno
├── requirements.txt    # Dependencias de Python
├── templates/
│   └── index.html     # Interfaz frontend con Tailwind CSS
└── README.md          # Este archivo
```

## API Endpoints

### `GET /`
Renderiza la página principal.

### `POST /convert`
Convierte un archivo PDF a Markdown.

**Request:**
- Método: POST
- Content-Type: multipart/form-data
- Body: archivo PDF en el campo 'file'

**Response (éxito):**
```json
{
  "success": true,
  "filename": "documento.pdf",
  "markdown": "# Contenido del PDF..."
}
```

**Response (error):**
```json
{
  "success": false,
  "error": "Mensaje de error"
}
```

## Manejo de Errores

La aplicación maneja los siguientes casos de error:
- Archivos no proporcionados
- Archivos vacíos
- Archivos que no son PDF
- Errores durante el procesamiento del PDF
- Errores del servidor

## Tecnologías Utilizadas

- **Backend:** Flask (Python)
- **Procesamiento PDF:** pdf-inspector (Firecrawl)
- **Frontend:** HTML5, JavaScript, Tailwind CSS (CDN)
- **Fuentes:** Inter (UI), JetBrains Mono (código)

## Límites

- Tamaño máximo de archivo: 16MB
- Formato aceptado: PDF únicamente

## Autor

Desarrollado por [jpdevz](https://jpdevz.com)

## Licencia

Este proyecto es parte del portafolio profesional de jpdevz.
