---
layout: entry
title: "Medication"
shortdef: "Todas las menciones de medicamentos o drogas empleadas"
---

Deben anotarse en esta clase de entidad todas las menciones de medicamentos o drogas empleadas en el tratamiento y/o prevención de enfermedades, incluyendo marcas comerciales y genéricos, así como también nombres para grupos de medicamentos. 

## Reglas positivas

* Anotar como medicamento todos los líquidos administrados por vía intravenosa, incluyendo los productos biológicos.

<div class="annotation-correct" markdown="1">
~~~ ann
se suplementa, sin necesidad de transfusión
T1 Medication 32 43 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Hidratación EV 1000 cc suero fisiológico goteo rápido
T1 Medication 23 40 
~~~
</div>

* Los tratamientos que un paciente tuvo, tendrá, podrá tener en el futuro, o se mencionan explícitamente que el paciente no debe tener, también se etiquetan como tratamientos

<div class="annotation-correct" markdown="1">
~~~ ann
Evitar el consumo de analgésicos, vitaminas, o …
T1 Medication 21 32 
T2 Medication 34 43 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente tiene contraindicado uso de Haldol ...
T1 Medication 37 43 
~~~
</div>

## Reglas negativas

* NO deben etiquetarse drogas ilegales u otro tipo de drogas que no se tomen con fines médicos.

<div class="annotation-incorrect" markdown="1">
~~~ ann
Consumo de Cocaína.
T1 Medication 11 18 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
(+) a cocaína, (con trazas)marihuana, anfetaminas.
T1 Medication 6 13 
T1 Medication 27 36 
T1 Medication 38 49 
~~~
</div>

* En caso de mencionarse, NO deben incluirse en la etiqueta la cantidad, dosis, frecuencia y modo/vía de administración del medicamento.

<div class="annotation-incorrect" markdown="1">
~~~ ann
Socian (Amisulpirida 50 mg)	
T1 Medication 0 27 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
... litio retard 450mg 1-0-1 lactulosa 66% 20ml cada 8hrs … 
T1 Medication 4 15 
T1 Medication 27 36 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Risperidona 2 mg noche, subir mañana a 3 mg.
T1 Medication 0 11 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
se han titulado fármacos antipsicoticos.
T1 Medication 16 39 
~~~
</div>

