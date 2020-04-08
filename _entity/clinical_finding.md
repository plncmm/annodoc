---
layout: entry
title: "Clinical Finding"
shortdef: "Hallazgo clínico y enfermedad"
---

Dentro de la etiqueta “hallazgos clínicos” se anotan entidades que pueden pertenecer a dos posibles categorías: hallazgos (findings) y enfermedades (diseases/disorders):

* Hallazgos: se definen como observaciones, juicios o evaluaciones sobre los pacientes y cumplen los siguientes criterios:
  * Los hallazgos pueden ser normales (pero no necesariamente); ninguna enfermedad puede serlo.
  * Algunos hallazgos pueden existir sólo en un momento dado (por ejemplo, un nivel de sodio en el suero); las enfermedades no pueden.
* Enfermedades: es una subclase incluida en los hallazgos que a menudo corresponde al diagnóstico, y debe cumplir con los siguientes criterios:
  * Las enfermedades son necesariamente anormales.
  * Tienen persistencia temporal, con la posibilidad (al menos teórica) de que sus manifestaciones sean tratadas, en remisión o en reposo, aunque el trastorno en sí todavía esté presente.
  * Tienen necesariamente un proceso patológico subyacente.
  * Pueden verificarse y asociarse con un código CIE-10.

## Reglas positivas

* Etiquetar palabras o frases que nombran anormalidades anatómicas u otros tipos de alteraciones clínicas, sin llegar a ser un síndrome o una enfermedad. 

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente con juicio de la realidad alterado asociado a fiebre 
T1 Clinical_Finding 0 61 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Dolor abdominal intenso migrante que impide la marcha
T1 Clinical_Finding 0 53 
~~~
</div>

* Los antecedentes de enfermedades pasadas, que el paciente ya no tenga, se incluyen como hallazgo al igual que las cirugías previas.

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente con antecedente de apendicectomía, colecistectomía consulta por…
T1 Clinical_Finding 13 42 
T2 Clinical_Finding 44 59 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente con antecedentes de Osteomielitis por S. Aureus.
T1 Clinical_Finding 29 57 
~~~
</div>

* Etiquetar todas las menciones que indiquen ausencia de hallazgos patológicos.

<div class="annotation-correct" markdown="1">
~~~ ann
Evoluciona hemodinámicamente estable, afebril…
T1 Clinical_Finding 11 36 
T2 Clinical_Finding 38 45 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Ha estado de buen animo…
T1 Clinical_Finding 13 23 
~~~
</div>

* Etiquetar frases que describen el tratamiento y/o el resultado del mismo

<div class="annotation-correct" markdown="1">
~~~ ann
Usuario de vitamina c 800 UI....
T1 Clinical_Finding 0 28 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
En tratamiento con eutirox 50 mcg al dia
T1 Clinical_Finding 0 40 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Tratamiento con 3 antihipertensivos, sin respuesta al tratamiento derivó...
T1 Clinical_Finding 0 65 
~~~
</div>

* Los resultados de exámenes de apoyo diagnóstico deben ser anotados como hallazgos clínicos.

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
… urocultivo positivo a enteroco ...
T1 Clinical_Finding 2 32 
~~~
</div>

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
Presencia de E. coli en la orina
T1 Clinical_Finding 13 32 
~~~
</div>

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
Radiografía de tórax con cardiomegalia aparente
T1 Clinical_Finding 0 47 
~~~
</div>

* Incluir en las etiquetas la duración de los hallazgos clínicos, incluyendo cuando sea un atributo inherente del proceso patológico en sí.

<div class="annotation-correct" markdown="1">
~~~ ann
… dx psiquiátricos de TAB de larga data…
T1 Clinical_Finding 22 39 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Pte con artralgia desde hace 3 años , diurnas , con aumento de...
T1 Clinical_Finding 8 45 
~~~
</div>

<div class="annotation-correct" markdown="1">
Es un atributo inherente del proceso patológico en sí.
~~~ ann
Dolor lumbar de inicio súbito
T1 Clinical_Finding 0 29 
~~~
</div>

<div class="annotation-correct" markdown="1">
Es un atributo inherente del proceso patológico en sí.
~~~ ann
Dolor crónico de articulaciones interfalángicas
T1 Clinical_Finding 0 13 
~~~
</div>

* Anotar los atributos dimensionales del hallazgo clínico.

<div class="annotation-correct" markdown="1">
~~~ ann
se observa nódulo pulmonar de 15x 16 mm.
T1 Clinical_Finding 11 39 
~~~
</div>

## Reglas negativas

* NO etiquetar trastornos expresados como la identidad o atributo de un objeto.

<div class="annotation-incorrect" markdown="1">
~~~ ann
Medidas generales Régimen diabético
T1 Clinical_Finding 26 35 
~~~
</div>

## Reglas multipalabra

* Etiquetar como una sola entidad los hallazgos clínicos compuestos por más de una palabra.

<div class="annotation-correct" markdown="1">
Correcto: una entidad
~~~ ann
Orientado en tiempo, espacio, persona.
T1 Clinical_Finding 0 37 
~~~
</div>

<div class="annotation-correct" markdown="1">
Correcto: dos entidades
~~~ ann
Vigil, atenta invierte series simples
T1 Clinical_Finding 0 5 
T2 Clinical_Finding 7 37 
~~~
</div>