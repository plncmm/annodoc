---
layout: entry
title: "Disease"
shortdef: "Enfermedades mapeables a un código CIE-10"
---
 
 Dentro de esta categoría se anotan las entidades que correspondan a enfermedades mapeables a un diagnóstico reconocido dentro de la terminología de clasificación estándar CIE-10 (Clasificación Internacional de Enfermedades). 

 El etiquetar enfermedades es un paso muy importante dentro de este trabajo pues nos permitirá, entre otras cosas, identificar comorbilidades en forma automática en una base de datos masiva. En caso de que tenga dudas de si una entidad corresponde o no a una enfermedad, puede en la plataforma BRAT usar la opción “click here to search” bajo “cie-10_norm_db”o si prefiere puede consultar [https://eciemaps.mscbs.gob.es/ecieMaps/browser/index_10_mc.html](https://eciemaps.mscbs.gob.es/ecieMaps/browser/index_10_mc.html).

<div class="annotation-correct" markdown="1">
~~~ ann
PACIENTE SUFRE ATROPELLO EN VIA PUBLICA RESULTANDO CON FRACTURA DIENTE 24 Y 26 AVULSION DIENTE 25 Traumatismo dento alveolar
T1	Disease 55 70	FRACTURA DIENTE
T3	Disease 79 94	AVULSION DIENTE
T5	Disease 98 124	Traumatismo dento alveolar
T2	Body_Part 88 97	DIENTE 25
T6	Clinical_Finding 15 24	ATROPELLO
T4	Body_Part 64 78	DIENTE 24 Y 26
~~~
Ejemplo de anotación de [Finding]() y [Disease]().

</div>

## Reglas positivas

* Anotar los atributos temporales sólo si el nombre específico de la enfermedad lo contiene.

<div class="annotation-correct" markdown="1">
~~~ ann
… paciente presenta periodontitis crónica ...
T1 Disease 20 41 
~~~
</div>

## Reglas negativas

* NO anotar los agentes causales como parte de la enfermedad.

<div class="annotation-incorrect" markdown="1">
~~~ ann
Paciente con antecedentes de Osteomielitis por S. Aureus.
T1 Disease 29 56 
~~~
</div>

* NO incluir en las etiquetas la duración de las enfermedades, salvo cuando sea un atributo inherente del proceso patológico en sí.

<div class="annotation-incorrect" markdown="1">
~~~ ann
… dx psiquiátricos de TAB de larga data…
T1 Disease 22 39 
~~~
</div>


## Caso especial

Los hallazgos clínicos o enfermedades mencionadas en los antecedentes familiares de los pacientes, que no estén asignados a un sujeto particular en la oración, deben ser etiquetados como hallazgo clínico con el atributo de “antecedente familiar”.

<div class="annotation-correct" markdown="1">
Negado + Antecedente Familiar Implícito
~~~ ann
… sin antecedentes familiares de Enfermedad de Alzheimer.
T1 Disease 33 56 
A1 Implicit_Family_Background T1
A1 Negated T1
~~~
</div>

<div class="annotation-correct" markdown="1">
Antecedente Familiar Implícito
~~~ ann
antecedentes familiares de trastorno por consumo de alcohol 
T1 Disease 27 59 
A1 Implicit_Family_Background T1
~~~
</div>

<div class="annotation-correct" markdown="1">
Negado + Antecedente Familiar Implícito
~~~ ann
Niega antecedentes psiquiátricos familiares y personales 
T1 Clinical_Finding 6 32 
A1 Implicit_Family_Background T1
A1 Negated T1
~~~
</div>
