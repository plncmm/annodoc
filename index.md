---
layout: entry
title: Guía de Anotación de Entidades en Textos Médicos
---

Pablo Báez-Benavides (1), Fabián Villena (1,2), Manuel Durán (1),  Jocelyn Dunstan (1,2) 

1. Centro de Informática Médica y Telemedicina, Facultad de Medicina, Universidad de Chile.
2. Centro de Modelamiento Matemático, Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile.


## Introducción

Las fichas clínicas tienen un propósito legal y nemotécnico, pero también pueden ser usados para extraer información, por ejemplo, para fines epidemiológicos. Esto se conoce como “Uso Secundario de los Datos”. El trabajo de etiquetado de entidades médicas tiene como objetivo usar el conocimiento experto para identificar palabras o expresiones que tienen importancia clínica. Con un volumen de texto etiquetado considerable podemos entrenar algoritmos computacionales que realizan esta detección de manera automática.

Este proyecto busca crear el primer cuerpo de texto (corpus) etiquetado con narrativas clínicas producidas en Chile. Esta guía de etiquetado busca apoyar la labor de los(as) etiquetadores(as) y se utilizará el software BRAT que es estándar en el área. 

Usando el nombre de usuario y contraseñas dadas por el equipo busque la carpeta asignada con su nombre en [http://healthcarex.ml/brat-v1.3_Crunchy_Frog/#/](http://healthcarex.ml/brat-v1.3_Crunchy_Frog/#/). Seleccione el primer archivo en donde leerá una narrativa clínica. Al seleccionar una o más palabras, el software automáticamente le ofrecerá el menú mostrado abajo de entidades médicas y atributos. Cada uno de estos elementos son explicados en detalle más adelante a lo largo de esta guía.

<img src="https://github.com/fvillena/annodoc/raw/master/static/img/image2.png" width="100%"/>

Cuando se termina el etiquetado de una narrativa dada se puede avanzar a la siguiente apretando la flecha hacia la derecha que se encuentra en la parte superior izquierda de la pantalla. Se puede parar de etiquetar y volver a ello ingresando con su usuario ya que las etiquetas quedan guardadas automáticamente. 

El uso de BRAT nos permite comparar etiquetas entre varias personas leyendo las mismas narrativas, por lo que pedimos que trabajen individualmente. En caso de querer aprender más de BRAT puede consultar el manual [brat.nlplab.org/manual.html](brat.nlplab.org/manual.html).

## Reglas de anotación manual de entidades

La premisa fundamental que rige todas las reglas de anotación en este protocolo es que **se debe anotar la expresión más corta y general posible**, considerando que aún así se debe describir completamente la entidad. En este sentido, las palabras modificadoras deben ser excluidas.
Las reglas de anotación se pueden clasificar en 4 tipos:
* Reglas generales (Reglas-G): reglas positivas y negativas que se aplican a todas las etiquetas de menciones, incluyen reglas ortográficas generales.
* Reglas positivas (Reglas-P): reglas que especifican las entidades que se deben anotar.
* Reglas negativas (Reglas-N): reglas que especifican las entidades que no hay que anotar.
* Reglas multipalabra (Regla-M): reglas que especifican si un grupo de palabras debe anotarse bajo una única etiqueta o no.

### Reglas generales

* No incluir en la etiqueta los espacios ni signos de puntuación que aparezcan antes o después de cada mención.

  * Correcto:

<div class="annotation-correct" markdown="1">
~~~ ann
Diagnósticos de ingreso: - Episodio depresivo grave .
T1 Disease 27 51 
~~~
</div>

  * Incorrecto:

<div class="annotation-incorrect" markdown="1">
~~~ ann
Diagnósticos de ingreso: - Episodio depresivo grave .
T1 Disease 23 52 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
… posiblemente secundaria a fluoxetina, que …
T1 Medication 27 39 
~~~
</div>

* No incluir en la etiqueta los espacios ni signos de puntuación que aparezcan antes o después de cada mención.

## Reglas específicas

Las reglas asociadas a cada una de las entidades a anotar se encuentran definidas en su respectiva página:

* **Entidades**
  {% for e in site.entity %}
  * [{{ e.title }}]({{ e.url | remove_first:'/' }}): {{ e.shortdef }}
  {% endfor %}

* **Relaciones**
  {% for r in site.relation %}
  * [{{ r.title }}]({{ r.url | remove_first:'/' }}): {{ r.shortdef }}
  {% endfor %}

* **Atributos**
  {% for a in site.ent_attributes %}
  * [{{ a.title }}]({{ a.url | remove_first:'/' }}): {{ a.shortdef }}
  {% endfor %}

  