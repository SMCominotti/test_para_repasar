// Array de objetos con 40 preguntas y respuestas de los Temas 4 y 5 de Digitalización (2º evaluación)

const preguntas_en_crudo = [
            { // PREGUNTA 1
                pregunta: "¿Cuál es la principal diferencia entre un dato y una información?",
                idCorrecta: 1, // Índice de la respuesta correcta
                respuestas: ["No hay diferencia, ambos términos son sinónimos.", "El dato es crudo y sin contexto; la información es el dato procesado y con significado.", "El dato siempre es numérico y la información siempre es textual."]
            },
            {
                pregunta: "¿Cuál de las siguientes NO es una etapa típica del ciclo de vida del dato?",
                idCorrecta: 0, // Índice de la respuesta correcta
                respuestas: ["Desfragmentación", "Visualización", "Recolección"]
            },
            {
                pregunta: "¿Cuál de las siguientes NO es una de las 'Vs' principales del Big Data?",
                idCorrecta: 2, // Índice de la respuesta correcta
                respuestas: ["Volumen", "Velocidad", "Veracidad"]
            },
            {
                pregunta: "¿Qué tipo de datos se caracteriza por no tener un formato fijo y ser difíciles de procesar con métodos tradicionales?",
                idCorrecta: 2, // Índice de la respuesta correcta
                respuestas: ["Datos semiestructurados", "Datos estructurados", "Datos no estructurados"]
            },
            { // PREGUNTA 5
                pregunta: "¿Cuál es el primer paso en un proyecto típico de Ciencia de Datos?",
                idCorrecta: 2, // Índice de la respuesta correcta
                respuestas: ["Modelado", "Recolección de datos", "Definir el objetivo de negocio"]
            },
            {
                pregunta: "¿Cómo se relacionan el Big Data, el Machine Learning y la Inteligencia Artificial?",
                idCorrecta: 2, // Índice de la respuesta correcta
                respuestas: ["El Machine Learning genera Big Data para la Inteligencia Artificial.", "La Inteligencia Artificial crea Machine Learning y Big Data. ", "El Big Data es la materia prima, el Machine Learning procesa los datos y la IA utiliza los resultados."]
            },
            {
                pregunta: "¿Cuál NO es una ventaja principal del almacenamiento en la nube?",
                idCorrecta: 2, // Índice de la respuesta correcta
                respuestas: ["Escalabilidad", "Acceso remoto", "Dependencia total de hardware local"]
            },
            {
                pregunta: "¿Cuál de los siguientes NO es un beneficio del Cloud Computing?",
                idCorrecta: 1, // Índice de la respuesta correcta
                respuestas: ["Escalabilidad y flexibilidad", "Mayor inversión inicial en infraestructura", "Ahorro de costes"]
            },
            {
                pregunta: "¿Cuál es el principal objetivo del Reglamento General de Protección de Datos (RGPD)?",
                idCorrecta: 0, // Índice de la respuesta correcta
                respuestas: ["Proteger la privacidad y los derechos de los individuos sobre sus datos personales", "Obligar a las empresas a compartir datos con el gobierno", "Facilitar el libre comercio de datos sin restricciones"]
            },
            { // PREGUNTA 10
                pregunta: "¿Cuál es una ventaja de convertir un rango de datos en una 'Tabla de Excel'?",
                idCorrecta: 2, // Índice de la respuesta correcta
                respuestas: ["Hace que los datos sean invisibles", "Elimina la posibilidad de usar fórmulas", "Facilita la gestión y el análisis de datos, incluyendo la actualización automática en tablas dinámicas"]
            },
            {
                pregunta: "¿Para qué sirve una tabla dinámica en Excel?",
                idCorrecta: 1, // Índice de la respuesta correcta
                respuestas: ["Eliminar datos duplicados automáticamente", "Resumir y analizar datos de forma flexible", "Convertir texto en imágenes"]
            },
            {
                pregunta: "¿Qué ventaja principal ofrecen los gráficos dinámicos en Excel?",
                idCorrecta: 2, // Índice de la respuesta correcta
                respuestas: ["No permiten personalización", "Solo pueden mostrar datos estáticos", "Se actualizan automáticamente al cambiar la tabla dinámica subyacente"]
            },
            {
                pregunta: "¿Cuál es la función principal de Power Query en Excel?",
                idCorrecta: 0, // Índice de la respuesta correcta
                respuestas: ["Conectar, transformar y limpiar datos de diversas fuentes", "Enviar correos electrónicos masivos", "Crear presentaciones de diapositivas"]
            },
            {
                pregunta: "¿Cuál es la principal diferencia entre Power BI Desktop y Power BI Service?",
                idCorrecta: 1, // Índice de la respuesta correcta
                respuestas: ["Desktop permite colaboración en tiempo real", "Desktop es para crear informes; Service es para publicarlos y compartirlos en la nube", "Service solo funciona sin conexión a internet"]
            },
            { // PREGUNTA 15
                pregunta: "¿Qué tipo de visualización es ideal para mostrar tendencias a lo largo del tiempo en Power BI?",
                idCorrecta: 2, // Índice de la respuesta correcta
                respuestas: ["Gráfico circular", "Tabla", "Gráfico de líneas"]
            },
            {
                pregunta: "¿Para qué sirven los segmentadores (slicers) en Power BI?",
                idCorrecta: 2, // Índice de la respuesta correcta
                respuestas: ["Crean nuevas tablas automáticamente", "Sirven para enviar informes por correo", "Permiten filtrar datos de manera interactiva en los informes"]
            },
            {
                pregunta: "¿Qué hace la IA en plataformas como Netflix o Amazon para personalizar recomendaciones?",
                idCorrecta: 1, // Índice de la respuesta correcta
                respuestas: ["Elige recomendaciones al azar", "Analiza los datos de comportamiento del usuario y aprende patrones de preferencia", "Solo muestra los productos más caros"]
            },
            {
                pregunta: "¿Cómo ayuda la IA en la detección de fraude en el sector financiero?",
                idCorrecta: 1, // Índice de la respuesta correcta
                respuestas: ["Aprueba todas las transacciones automáticamente", "Detecta patrones inusuales en grandes volúmenes de transacciones", "Solo revisa transacciones manualmente"]
            },
            {
                pregunta: "¿Cuál de los siguientes es un principio fundamental del RGPD?",
                idCorrecta: 1, // Índice de la respuesta correcta
                respuestas: ["Recolección de todos los datos posibles sin restricción", "Minimización de datos", "Almacenamiento indefinido de datos"]
            },
            { // PREGUNTA 20
                pregunta: "¿Por qué es importante la calidad (veracidad) de los datos en la toma de decisiones empresariales?",
                idCorrecta: 2, // Índice de la respuesta correcta
                respuestas: ["Porque los datos de baja calidad son más baratos", "Porque la veracidad solo importa en el sector público", "Porque decisiones basadas en datos incorrectos pueden ser erróneas o perjudiciales"]
            },
            
			
        ];