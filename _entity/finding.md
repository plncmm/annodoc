---
layout: entry
title: "Finding"
shortdef: "Hallazgo, Signos o Síntomas y Resultados de laboratorio u otras pruebas"
---

Los Hallazgos o Findings se definen como observaciones, juicios o evaluaciones que se hacen sobre los pacientes. A diferencia de las enfermedades pueden ser normales (pero no necesariamente) y algunos pueden existir sólo en un momento dado (por ejemplo, un nivel de sodio en el suero).
Además, dentro de la etiqueta “Findings” se pueden anotar **dos subentidades**: 

  * **Signos o síntomas:** los signos corresponden a manifestaciones objetivas usualmente determinadas mediante la exploración médica. Los síntomas por el contrario, son elementos subjetivos percibidos y expresados por el paciente. Vea las reglas de anotación de ésta subentidad [aquí]("Sign or Symptom")

  * **Resultados de exámenes de laboratorio u otras pruebas:** Cualquier medición o evaluación obtenida a partir de un exámen de apoyo diagnóstico (Ej. laboratorio, imagenológico). Vea las reglas de anotación de ésta subentidad [aquí](Laboratory_Test_Result)

A continuación se encuentran las reglas de anotación de Findings que NO corresponden a ninguna de las dos subentidades anteriores.

## Reglas positivas

* Etiquetar palabras o frases que nombran anormalidades anatómicas u otros tipos de alteraciones clínicas, sin llegar a ser un síndrome o una enfermedad. 

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente con juicio de la realidad alterado asociado a...
T1 Clinical_Finding 13 43 
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

* Etiquetar dentro de esta categoría las frases que describen hábitos de consumo.

<div class="annotation-correct" markdown="1">
~~~ ann
Consumo de alcohol: +, conusmo de cigarro: - ....
T1 Clinical_Finding 11 21 
T2 Clinical_Finding 34 44 
~~~
</div>

* Anotar como Finding las frases que describen el resultado de tratamientos medicamentosos (pero no el tratamiento en sí).

<div class="annotation-correct" markdown="1">
~~~ ann
Tratamiento con 3 antihipertensivos, sin respuesta al tratamiento derivó...
T1 Clinical_Finding 37 65
A1 Negated T1 
~~~
</div>

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
T1 Laboratory_or_Test_Result 25 38 
~~~
</div>

## Reglas negativas

* No anotar tratamientos medicamentosos como hallazgos clínicos.

<div class="annotation-incorrect" markdown="1">
~~~ ann
Tratamiento con 3 antihipertensivos, sin respuesta al tratamiento derivó...
T1 Clinical_Finding 0 35 
~~~
</div>

* NO incluir en la anotación la duración de los hallazgos.

<div class="annotation-incorrect" markdown="1">
~~~ ann
refiere consumo de tabaco de larga data…
T1 Clinical_Finding 8 39 
~~~
</div>

* NO incluir en las anotaciones de resultados los exámenes de apoyo o procedimientos diagnósticos realizados.

<div class="annotation-incorrect" markdown="1">
~~~ ann
… urocultivo positivo a enteroco ...
T1 Laboratory_or_Test_Result 2 32 
~~~
</div>

* NO anotar los atributos dimensionales del hallazgo clínico.

<div class="annotation-incorrect" markdown="1">
~~~ ann
se observa nódulo pulmonar de 15x 16 mm.
T1 Laboratory_or_Test_Result 11 39 
~~~
</div>

* NO etiquetar trastornos expresados como la identidad o atributo de un objeto.

<div class="annotation-incorrect" markdown="1">
~~~ ann
Medidas generales Régimen diabético
T1 Clinical_Finding 26 35 
~~~
</div>

## Reglas multipalabra

* Etiquetar como una sola entidad los hallazgos clínicos compuestos por más de una palabra y que estén relacionados con la misma manifestación u observación clínica.

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
