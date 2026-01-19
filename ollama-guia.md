# Ollama

Ollama es una plataforma de modelos de lenguaje grande (LLM) que te permite ejecutar y gestionar modelos de lenguaje localmente.
Se maneja a través de la línea de comandos (CLI) pero puedes integrarlo con diferentes interfaces gráficas y servidores web para facilitar su uso.

![imagen ollama](enlace-foto-ollama.jpg)

## Instalación

Para instalar Ollama, sigue estos pasos:

1. Abre la terminal en Linux.
2. Instala `curl` si no lo tienes instalado.
3. Ejecuta el siguiente comando, descargará un script y lo ejecturará:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```
4. Una vez instalado, puedes verificar la instalación ejecutando:

```bash
ollama version
```

## Uso básico

Puedes descargar modelos preentrenados con `ollama pull <modelo>` , por ejemplo:

```bash
ollama pull qwen2.5:0.5b
```

Descargará el modelo *qwen2.5* de 0.5 billones de parámetros.

Para listar los modelos disponibles localmente, usa:

```bash
ollama list
```