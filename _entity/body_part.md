---
layout: entry
title: "Body Part"
shortdef: "Órgano o una parte anatómica de una persona"
---

Un parte del cuerpo se considera como un órgano o una parte anatómica de una persona.  También puede definirse como una colección de células y tejidos que están localizados en un área específica o que combinan y llevan a cabo una o más funciones especializadas de un organismo. Se incluyen tanto estructuras gruesas como pequeños componentes de órganos complejos. Se aceptan los términos que describen la parte del cuerpo. Algunas palabras como “proximal”, “descendente”, “ascendente” indican una parte del cuerpo  y deben ser anotadas si referencian la parte específica del mismo (Ej. colon proximal)

## Reglas positivas

* Etiquetar todas las estructuras corporales que pueden definirse anatómicamente.

<div class="annotation-correct" markdown="1">
~~~ ann
… secundario a prurito en piernas …
T1 Body_Part 26 33 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
… no se asocia a lesiones en la piel.
T1 Body_Part 32 36 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
… endometrio engrosado para edad.
T1 Body_Part 2 12 
~~~
</div>

<div class="annotation-correct" markdown="1">
Correcto: dos etiquetas separadas
~~~ ann
Cabeza y cuello: Normocraneo…
T1 Body_Part 0 6 
T2 Body_Part 9 15 
~~~
</div>

* Etiquetar las partes del cuerpo cuando forman parte de un problema médico.

<div class="annotation-correct" markdown="1">
~~~ ann
Hígado graso, 
T1 Body_Part 0 6 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Cáncer de estómago
T1 Body_Part 10 18 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Dolor en epigastrio
T1 Body_Part 9 19 
~~~
</div>

## Reglas negativas

* NO etiquetar los casos en los que la estructura corporal se utiliza en sentido figurado.

<div class="annotation-incorrect" markdown="1">
~~~ ann
… no tomar la solución en sus manos.
T1 Body_Part 30 35 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
… voces que escucha dentro de su cabeza.
T1 Body_Part 33 39 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
… “un click habia hecho en la cabeza”.
T1 Body_Part 30 36 
~~~
</div>

* No etiquetar las partes del cuerpo cuando son usados como adjetivos.

<div class="annotation-incorrect" markdown="1">
~~~ ann
Lupus cutáneo inactivo…
T1 Body_Part 6 13 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
Expresión facial fija y postura corporal fijas.
T1 Body_Part 10 16 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
Lesión corneal…
T1 Body_Part 7 14 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
Dolor abdominal ...
T1 Body_Part 6 15 
~~~
</div>

## Reglas multipalabra

* Etiquetar como una sola entidad las partes del cuerpo en las que se precisa su localización.

<div class="annotation-correct" markdown="1">
~~~ ann
Leiomiosarcoma muslo derecho con metástasis pulmonares
T1 Body_Part 15 28 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Diverticulosis severa de colon sigmoides.
T1 Body_Part 25 40 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
… falanges distales 4 dedos mano izq.
T1 Body_Part 2 19 
T2 Body_Part 22 36 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Extremidades inferiores: Pulsos pedios presentes… 
T1 Body_Part 0 23 
~~~
</div>