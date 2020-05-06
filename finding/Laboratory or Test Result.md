---
layout: entry
title: "Laboratory or Test Result"
shortdef: "Resultados de un exámen de apoyo diagnóstico"
---

# Reglas de anotación para Resultados de exámenes de laboratorio u otras pruebas 

## Reglas positivas

* Los resultados de exámenes de apoyo diagnóstico deben ser anotados como Resultados de Laboratorio u otras Pruebas.

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
… urocultivo positivo a enteroco ...
T1 Laborathory_Procedure 2 12 
T2 Laboratory_or_Test_Result 13 32 
~~~
</div>

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
Presencia de E. coli en la orina
T1 Laboratory_or_Test_Result 13 32 
~~~
</div>

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
Radiografía de tórax con cardiomegalia aparente
T1 Diagnostic_Procedure 0 20 
T2 Laboratory_or_Test_Result 25 38 
~~~
</div>

## Reglas negativas


* NO incluir en las anotaciones de resultados el nombre del procedimiento realizado.

<div class="annotation-incorrect" markdown="1">
~~~ ann
… urocultivo positivo a enteroco ...
T1 Laboratory_or_Test_Result 2 32 
~~~
</div>

* NO anotar los atributos dimensionales de los resultados.

<div class="annotation-incorrect" markdown="1">
~~~ ann
se observa nódulo pulmonar de 15x 16 mm.
T1 Laboratory_or_Test_Result 11 39 
~~~
</div>
