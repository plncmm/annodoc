---
layout: entry
title: "Procedure"
shortdef: "Procedimientos diagnósticos, terapéuticos y de laboratorio"
---

Dentro de la etiqueta “Procedure” se anotan todas aquellas actividades derivadas de la atención y el cuidado de los pacientes. Existen **tres sub-entidades** diferentes dentro de esta categoría: 

- **Procedimientos Diagnósticos:** todos los exámenes que permiten determinar la condición del individuo (ej. exploración por tomografía computarizada) 
- **Procedimientos Terapéuticos o Preventivos:** incluye cualquier actividad o tratamiento - incluso de tipo quirúrgico, quimio/radioterapéutico - que es empleado para prevenir, reparar, eliminar o curar la enfrmedad del individuo (ej. ejercicio, dieta, psicoterapia). Se excluyen de esta categoría las intervenciones de tipo medicamentoso. 
- **Procedimientos de Laboratorio:** todos los exámenes que se realizan en diversas muestras de pacientes que permiten diagnosticar enfermedades mediante la detección de biomarcadores y otros parámetros. Se consideran los análisis de sangre, orina, y otros fluidos y tejidos que emplean métodos bioquímicos, microbiológicos y/o citológicos (ej. hemograma, prueba de tiempo de protrombina).

## Reglas positivas

* Anotar todos los antecedentes quirúrgicos como Procedimientos Terapéuticos.

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente con antecedente de apendicectomía, colecistectomía consulta por…
T1 Therapeutic_Procedure 28 42 
T2 Therapeutic_Procedure 44 59 
~~~
</div>

* Anotar todas las frases que describen tratamientos NO medicamentosos como Procedimientos Terapéuticos.

<div class="annotation-correct" markdown="1">
~~~ ann
En tratamiento con fisioterapeuta cada...
T1 Therapeutic_Procedure 3 33 
~~~
</div>

* Anotar todos los exámenes de laboratorio como Procedimientos de Laboratorio.

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
… urocultivo positivo a enteroco ...
T1 Laborathory_Procedure 2 12 
~~~
</div>

* Anotar todos los exámenes de apoyo diagnóstico como Procedimientos Diagnósticos.

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
Radiografía de tórax con cardiomegalia aparente
T1 Diagnostic_Procedure 0 20 
~~~
</div>

* Agregar el atributo "waiting" a todos los procedimientos que aun no se han realizado o que están programados.

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente a la espera de cirugía dental por…
T1 Therapeutic_Procedure 24 38 
A1 waiting T1
~~~
</div>

## Reglas negativas

* No anotar los resultados de los procedimientos dentro de esta categoría 

<div class="annotation-incorrect" markdown="1">
~~~ ann
… urocultivo positivo a enteroco ...
T1 Laborathory_Procedure 2 32 
~~~
</div>

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
Radiografía de tórax con cardiomegalia aparente
T1 Diagnostic_Procedure 0 20 
T2 Clinical_Finding 25 38 
~~~
</div>
