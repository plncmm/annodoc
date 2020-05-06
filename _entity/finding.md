---
layout: entry
title: "Finding"
shortdef: "Hallazgo, Signos o Síntomas y Resultados de laboratorio u otras pruebas"
---

Los Hallazgos o Findings se definen como observaciones, juicios o evaluaciones que se hacen sobre los pacientes. A diferencia de las enfermedades pueden ser normales (pero no necesariamente) y algunos pueden existir sólo en un momento dado (por ejemplo, un nivel de sodio en el suero).
Además, dentro de la etiqueta “Findings” se pueden anotar dos subentidades: 

  * **Signos o síntomas:** los signos corresponden a manifestaciones objetivas usualmente determinadas mediante la exploración médica. Los síntomas por el contrario, son elementos subjetivos percibidos y expresados por el paciente. Vea las reglas de anotación específicas de ésta subentidad [aquí](../finding/Sign%20or%20Symptom).

  * **Resultados de exámenes de laboratorio u otras pruebas:** Cualquier medición o evaluación obtenida a partir de un exámen de apoyo diagnóstico (Ej. laboratorio, imagenológico). Vea las reglas de anotación específicas de ésta subentidad [aquí](../finding/Laboratory%20or%20Test%20Result).

En caso de presentar dudas en cuanto a la categoría a la que pertenece una entidad, puede resolverlas empleando el Metatesauro UMLS registrandose en: [UMLS Terminology Services](https://uts.nlm.nih.gov//license.html).  

A continuación se encuentran las reglas de anotación de Findings que NO corresponden a ninguna de las dos subentidades anteriores.

## Reglas positivas

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

<!---
Esto debería ir en otra categoría dentro de finding llamada Factores de riesgo
* Etiquetar dentro de esta categoría las frases que describen hábitos de consumo.

<div class="annotation-correct" markdown="1">
~~~ ann
Consumo de alcohol: +, conusmo de cigarro: - ....
T1 Clinical_Finding 11 21 
T2 Clinical_Finding 34 44 
~~~
</div>
-->

* Anotar como Finding las frases que describen el resultado de tratamientos medicamentosos (pero no el tratamiento en sí).

<div class="annotation-correct" markdown="1">
~~~ ann
Tratamiento con 3 antihipertensivos, sin respuesta al tratamiento derivó...
T1 Clinical_Finding 37 65 
A1 Negated T1 
~~~
</div>

## Reglas negativas

* NO anotar tratamientos medicamentosos como hallazgos.

<div class="annotation-incorrect" markdown="1">
~~~ ann
Tratamiento con 3 antihipertensivos, sin respuesta al tratamiento derivó...
T1 Clinical_Finding 0 35 
~~~
</div>

* NO incluir en la anotación la duración de los hallazgos.

<div class="annotation-incorrect" markdown="1">
~~~ ann
refiere consumo de alcohol desde hace varios años…
T1 Clinical_Finding 8 49 
~~~
</div>

## Reglas multipalabra

* Etiquetar como una sola entidad los hallazgos compuestos por más de una palabra y que estén relacionados con la misma manifestación u observación clínica.

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
