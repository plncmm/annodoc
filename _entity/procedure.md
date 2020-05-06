---
layout: entry
title: "Procedure"
shortdef: "Procedimientos diagnósticos, terapéuticos y de laboratorio"
---

Dentro de la etiqueta “Procedure” se anotan todas aquellas actividades derivadas de la atención y el cuidado de los pacientes. Existen tres subentidades diferentes dentro de esta categoría: 

- **Procedimientos Diagnósticos:** todos los exámenes que permiten determinar la condición del individuo (ej. exploración por tomografía computarizada). Vea las reglas de anotación específicas de ésta subentidad [aquí](../procedure/Diagnostic%20Procedure). 

- **Procedimientos Terapéuticos o Preventivos:** incluye cualquier actividad o tratamiento - incluso de tipo quirúrgico, quimio/radioterapéutico - que es empleado para prevenir, reparar, eliminar o curar la enfrmedad del individuo (ej. ejercicio, dieta, psicoterapia). Se excluyen de esta categoría las intervenciones de tipo medicamentoso. Vea las reglas de anotación específicas de ésta subentidad [aquí](../procedure/Therapeutic%20Procedure). 

- **Procedimientos de Laboratorio:** todos los exámenes que se realizan en diversas muestras de pacientes que permiten diagnosticar enfermedades mediante la detección de biomarcadores y otros parámetros. Se consideran los análisis de sangre, orina, y otros fluidos y tejidos que emplean métodos bioquímicos, microbiológicos y/o citológicos (ej. hemograma, prueba de tiempo de protrombina). Vea las reglas de anotación específicas de ésta subentidad [aquí](../procedure/Laborathory%20Procedure).

En caso de presentar dudas en cuanto a la categoría a la que pertenece una entidad, puede resolverlas empleando el Metatesauro UMLS registrandose en: [UMLS Terminology Services](https://uts.nlm.nih.gov//license.html).  

## Reglas positivas

* Agregar el atributo "pending" a todos los procedimientos que aun no se han realizado o que están programados.

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente a la espera de radiografía dental por…
T1 Diagnostic_Procedure 24 41 
A1 pending T1
~~~
</div>

## Reglas negativas

* No anotar los resultados de los procedimientos dentro de esta categoría 

<div class="annotation-correct" markdown="1">
Correcto
~~~ ann
Radiografía de tórax con cardiomegalia aparente
T1 Diagnostic_Procedure 0 20 
T2 Laboratory_or_Test_Result 25 38 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
Incorrecto
~~~ ann
… urocultivo positivo a enteroco ...
T1 Laborathory_Procedure 2 32 
~~~
</div>