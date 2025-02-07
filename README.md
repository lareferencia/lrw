
Widget especializado que exhibe las estadìsticas del item en todos los niveles (Repositorio, Nodo Nacional y LA Referencia)


### 1. Condiciones necesarias para el funcionamiento

<kbd>Importante!!! Para poder consumir los servicios, el repositorio debe estar al día con el envío de eventos de uso y las direcciones http/https del sistema cliente deben estar registradas en el sistemas. Ambas condiciones deben ser gestionadas con los gestores del nodo nacional LA Referencia.</kbd>

### 2. Definición del DIV contenedor

El gestor del repositorio debe incluir un div identificado como ***usage-stats*** dentro de la página o template del ítem. De esta manera se puede determinar exactamente el lugar donde se desplegará la visualización.

```html
<div id="usage-stats"></div>
```

### 3. Inclusión del código a parametrizar

El gestor del repositorio debe configurar (de acuerdo a los parametros de la sección anterior) e incluir el siguiente código en la página del ítem. Se recomienda pegarlo a continuación del DIV (ver 2) para facilitar el posterior mantenimiento. 

```js 

    <script>
      (function (window, document, scriptTag, globalVar, paramsKey, cdnUrl) {
        window[globalVar] =
          window[globalVar] ||
          function () {
            window[globalVar][paramsKey] = window[globalVar][paramsKey] || {};
            Object.assign(window[globalVar][paramsKey], arguments[0] || {});
          };

        const scriptElement = document.createElement(scriptTag);
        scriptElement.id = globalVar;
        scriptElement.src = cdnUrl;
        scriptElement.type = "module";
        scriptElement.defer = true; 

        scriptElement.onerror = function () {
          console.error(`Failed to load script ${scriptElement.src}`);
        };

        const firstScript = document.getElementsByTagName(scriptTag)[0];
        firstScript.parentNode.insertBefore(scriptElement, firstScript);
      })(
        window,
        document,
        "script",
        "lrw",
        "parameters",
        "https://cdn.jsdelivr.net/gh/lareferencia/lrw@2.0.7/dist/lrw.js"
      );
      window["lrw"]({
        widget_div_id: "usage-stats",

        identifier: "",
        identifier_meta_field: "",
        identifier_prefix: "",
        identifier_regex: "",
        
        scope_labels: {
          N: "Nodo Nacional",
          R: "Repositorio",
        },
        country: "ISO COUNTRY",
        repository_source: "SOURCE REPOSITORIO",
        lang: "es",
      });
    </script> 
   
   ```

### 4. Determinación de parámetros de contexto

Es importante reemplazar los siguientes paráemtros en el codigo de la sección anterior. 

- **versión del widget:**

Es importante utilizar la útima versión del componente, para determinar la versión consulte esta dirección al momento de realizar la instalación.
https://github.com/lareferencia/lrw/blob/main/changeLog.md

La version tiene la forma X.Y.Z y debe ser actualizada en el código de la seccion anterior (línea 12) cdn.jsdelivr.net/gh/lareferencia/lrw@X.Y.Z/dist/lrw.js reemplazando X.Y.Z

- **Nombre del nodo nacional:**

Nombre que aparecerá describiendo los eventos provenientes del nodo nacional. Esto debe ser indicado por el gestor del nodo nacional.

- **Nombre del repositorio:**

Nombre que aparecerá describiendo los eventos del repositorio, debe ser corto para evitar problemas de visualización.

- **country:** 

ISO dos digitos del país de repositorio. Ejemplos: AR,BR,ES,UY 

- **repository_source:**

Identificador del repositorio, se forma con el prefijo **OPENDOAR::** concatenado con el número identificatorio en OpenDOAR. Ejemplo: **OPENDOAR::1234**

- **item oai identifier:**

Existen tres opciones para parametrizar el OAI PMH Identifier del ítem para obtener las estadísticas correctas.

1. **Pasar el identifier directamente en el código de incrustación (usualmente escribiendo el html del lado del servidor)**

En ese caso se debe quitar los comentarios // en la línea 15 del código y completar el identificar del ítem. 
Ejemplo:

```
identifier: 'oai:cybertesis.uni.edu.pe:uni/6067', 
```
2. **Indicar un campo meta donde la aplicación obtendrá el identifier**

En este caso se debe indicar un campo html meta donde ya esté presente el identificador. Esto puede ocurrir cuando ya se han definido campos meta para Google Schoolar. 

Ejemplo:
Si ya se encuentra definido el meta eprints.eprintid e

```html
<meta name="eprints.eprintid" content="oai:cybertesis.uni.edu.pe:uni/6067">
```

Entonces se debe quitar los comentarios // en la línea 16 del código y consignar el nombre del campo meta correspondiente.

```
identifier_meta_field: 'eprints.eprintid',
```

3. **Indicar una expresión regular y prefijo para construir el oai identifier basándose en la url de la página del item**

En este caso se utiliza un prefijo, usualmente la parte invariante del oai phm identifier del sistema cliente y una expresión regular para extraer la parte variable del identifier usando la url del item como fuente. 

[Definición del oai identifier en DSpace 6 (a modo de ejemplo)](/es/public/estadisticas/widget/dspace6#determinación-de-parámetros-de-contexto)

<kbd>Importante!! Si tiene dudas respecto de algún parámetro consulte a su nodo nacional.</kbd>

-  identifier: ""
Si conoce el identifier, puede colocarse directamente aqui.

- Configurar identifier_prefix, identifier_meta_field e identifier_regex

"oai identifier" es un identificador único utilizado en las solicitudes OAI-PMH para extraer los metadatos del ítem. La sintaxis de dicho identificador consta de tres partes:

    1. El esquema, seguido de dos puntos (:)
    2. El identificador de espacio de nombres, seguido de un slash (/)
    3. El identificador local.

El esquema es siempre "oai", el identificador de espacio de nombres es un nombre de dominio y el identificador local es una cadena de caracteres que identifica al elemento dentro del repositorio.

    Por ejemplo:
    ```
    oai:repositorio.utn.ac.cr:20.500.13077/403
    oai:bdigital.uexternado.edu.co:001/8734
    oai:digital.cic.gba.gob.ar:11746/6844
    ```
- El widget de estadísticas requiere de este identificador para recuperar los datos de vistas y descargas relacionados con un ítem específico, es necesario construirlo configurando las variables: identifier_prefix, identifier_meta_field y identifier_regex.

1. identifier_prefix: 

2. identifier_meta_field: 

3. identifier_regex: 

- Por ejemplo, un repositorio que utilice el servicio handle e identifique persistentemente sus ítems de la forma "https://hdl.handle.net/[prefijoHandle]/[consecutivoDelItem]", deberá construir una expresión regular con la cual extraer este último valor colocado en la meta-etiqueta "citation_abstract_url" tras el último slash ("/").

- Otro ejemplo posible es que el contenido del metadato dc.identifier.uri sea de la siguiente forma "https://[nombreDelRepositorio]/handle/[prefijoHandle]/[consecutivoDelItem]". De igual manera, el valor del parámetro identifier_regex debe consistir en una expresión regular que permita extraer de esta meta-etiqueta, los dígitos que proceden después del último slash ("/").
- 
Ejemplo de una configuracion completa:

Ejemplo de configuración completa:
```
{
    "lareferencia-widgets": {
        "lrw": {
            "active": true,
            "widget_url": "https://cdn.jsdelivr.net/gh/lareferencia/lrw@2.0.7/dist/lrw.js",    
                    
            "parameters":{
                "widget_div_id": "usage-
                "identifier_meta_field": "citation_abstract_html_url",
                "identifier_prefix": "oai:repositorio.utn.ac.cr:20.500.13077/",
                "identifier_regex": "https://hdl.handle.net/[0-9\\.]+/([0-9]+)/?",

                "scope_labels": {
                    "N": "Kímuk",
                    "R": "Repositorio UTN"
                },
                "country": "CR",
                "repository_source": "OPENDOAR::4680"
            }
        }
    }
}

```

# Instalación del *widget* en DSpace 6 

## Interfaz XMLUI

### Definición del DIV contenedor
El archivo responsable de la construcción de la vista del ítem es /themes/nombreDelTema/xsl/aspect/artifactbrowser/item-view.xsl.

Este archivo se encuentra organizado en plantillas (templates) de manera que es necesario agregar un llamado a la nueva plantilla que insertará el widget.

El llamado a la nueva plantilla lo agregamos luego de **<xsl:call-template name="itemSummaryView-DIM-authors"/>**
```
<xsl:template match="dim:dim" mode="itemSummaryView-DIM">
       <div class="item-summary-view-metadata">
           <xsl:call-template name="itemSummaryView-DIM-title"/>
           <div class="row">
               <div class="col-sm-4">
                   <div class="row">
                       <div class="col-xs-6 col-sm-12">
                           <xsl:call-template name="itemSummaryView-DIM-type"/>
                           <xsl:call-template name="itemSummaryView-DIM-thumbnail"/>
                        </div>
                       <div class="col-xs-6 col-sm-12">
                           <xsl:call-template name="itemSummaryView-DIM-file-section"/>
                       </div>
                   </div>
                   <xsl:call-template name="itemSummaryView-DIM-date"/>
                   <xsl:call-template name="itemSummaryView-DIM-authors"/>
                   <xsl:call-template name="itemSummaryView-lareferencia-stats"/>
```
Más adelante en el mismo archivo, agregamos la definición de la nueva plantilla “**itemSummaryView-lareferencia-stats**” y dentro el div “**usage-stats**”.
```
<xsl:template name="itemSummaryView-lareferencia-stats">
       <div id="usage-stats"></div>
</xsl:template>
```

### Determinación de parámetros de contexto

Para construir el oai identifier a partir de la URL del item en DSpace, se requieren dos variables: **identifier_prefix** y **identifier_regex**.

La variable **identifier_prefix** corresponde a la forma en que DSpace está configurado para generar los oai identifiers.  Este valor puede consultarlo en el archivo /config/modules/oai.cfg en la variable oai.identifier.prefix.

También es posible consultar este valor en la interfaz OAI, específicamente como resultado de la consulta Identifiy.  En http://[[URL-DSpace]]/oai/request?verb=Identify puede observarse el "Sample identifier:

![sampleidentifier.png](/assets/sampleidentifier.png)

La variable **identifier_regex** corresponde a la expresión regular necesaria para obtener el consecutivo del ítem a patir de la URL.  De manera que si la URL tiene la forma:

https://www.kerwa.ucr.ac.cr/handle/10669/12345

A partir de ella debe extraerse el número consecutivo correspondiente el item (12345).  Este número se concatenará a la variable identifier_prefix.  Los valores de las variables utilizadas por el script deben ser los siguientes:

```
identifier_prefix: 'oai:https://www.kerwa.ucr.ac.cr:10669/',
identifier_regex: '\/handle\/[0-9\.]+\/([0-9]+)\/?', 
```


# Instalación del *widget* en VuFind

En el siguiente ejemplo se insertará el widget en la barra lateral justo sobre  “Ejemplares similares".  

## Definición del DIV contenedor

En Vufind, el archivo responsable de la construcción de la vista del récord es /themes/nombreDelTema/templates/record/view.phtml. 

Inserte el div “usage-stats” en la siguiente ubicación:
```
<div class="<?=$this->layoutClass('sidebar')?>">
    <div id="usage-stats"></div>
<?php foreach ($sidebarList as $current): ?>
```

3-Definición del “oai identifier”
La variable identifier, debe contener el "oai identifier" del record que se está visualizando en VuFind.

El valor del oai identifier puede obtenerse de varias formas:

Desde SOLR mediante la función getIdentifierOAI:

identifier: ‘<?=$this->driver->getIdentifierOAI()?>’

Desde la meta-etiqueta eprints.eprintid.  En este caso el nombre de la variable cambia a identifier_meta_field:

identifier_meta_field: 'eprints.eprintid'

 

4-Configuración de variables 
Para el correcto despliegue de las gráficas se deben configurarse las siguientes variables según corresponda:

En la sección scope_labels, debe sustituir nombreNodoNacional por el nombre de su respectivo nodo nacional, por ejemplo: ALICIA, SNRD, Kímuk, SILO, entre otros.

Para la variable country, debe sustituir ISO-país por el código de dos caracteres correspondiente a su país.  Por ejemplo: AR, BR, CL, CO, CR, EC, ES, MX, PA, PE, SV, UY.

Para la variable nacional_source, debe sustituir los signos de numeral (####) por el identificador único del nodo nacional*. asignado por la instalación de Matomo regional.

*En caso de no conocer el SITEID correspondiente a su nodo nacional comuníquese con el responsable técnico nacional.

 

5-Habilitación del dominio
Finalmente para que el script pueda obtener los datos a graficar, es necesario que el responsable técnico nacional reporte ante LA Referencia el dominio del repositorio (i.e http://sedici.unlp.edu.ar/).

De esta forma el repositorio tendrá permiso para acceder a recursos seleccionados desde un origen distinto (dominio) al que pertenece, en cumplimiento del protocolo Cross-origin resource sharing (CORS).

# Instalación del *widget* en DSpace 7
> Para instalar este widget en DSpace 7 consultar la documentación en: https://github.com/lareferencia/lareferencia-widget-embed/edit/main/README.md


