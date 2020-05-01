---
layout: entry
title: "Procedure"
shortdef: "Procedimientos diagnósticos, terapéuticos y de laboratorio"
---

Dentro de la etiqueta “Procedure” se anotan todas aquiellas actividades derivadas de la atención y el cuidado de los pacientes, como por ejemplo los procedimientos diagnósticos (exploración por tomografía computarizada), terapéuticos o preventivos que incluyan cualquier tratamiento NO medicamentosos(ejercicio, dieta o psicoterapia) y de laboratorio (hemograma, prueba de tiempo de protrombina).

## Reglas positivas

* Anotar todos los antecedentes quirúrgicos.

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente con antecedente de apendicectomía, colecistectomía consulta por…
T1 Procedure 28 42 
T2 Procedure 44 59 
~~~
</div>

* Anotar todas las frases que describen tratamientos NO medicamentosos

<div class="annotation-correct" markdown="1">
~~~ ann
En tratamiento con fisioterapeuta cada...
T1 Procedure 3 33 
~~~
</div>

* Anotar todos los exámenes de apoyo diagnóstico.

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
… urocultivo positivo a enteroco ...
T1 Procedure 2 12 
~~~
</div>

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
Radiografía de tórax con cardiomegalia aparente
T1 Procedure 0 20 
~~~
</div>

* Agregar el atributo "waiting" a todos los procedimientos que aun no se han realizado o que están programados.

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente a la espera de cirugía dental por…
T1 Procedure 24 38 
A1 waiting T1
~~~
</div>

## Reglas negativas

* No anotar los resultados de los procedimientos dentro de esta categoría 

<div class="annotation-incorrect" markdown="1">
~~~ ann
… urocultivo positivo a enteroco ...
T1 Procedure 2 32 
~~~
</div>

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
Radiografía de tórax con cardiomegalia aparente
T1 Procedure 0 20 
T2 Clinical_Finding 25 38 
~~~
</div>