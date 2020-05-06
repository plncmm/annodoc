---
layout: entry
title: "Sign or Symptom"
shortdef: "Manifestaciones objetivas y subjetivas respectivamente"
---

# Reglas de anotación para Signos o Síntomas

## Reglas positivas

* Etiquetar palabras o frases que nombran signo o síntoma. 

<div class="annotation-correct" markdown="1">
~~~ ann
Paciente con juicio de la realidad alterado asociado a fiebre
T1 Sign_or_Symptom 13 43 
T2 Sign_or_Symptom 55 61 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Dolor abdominal intenso migrante que impide la marcha
T1 Sign_or_Symptom 0 5 
~~~
</div>

* Incluir en las etiquetas la duración de los signos o síntomas sólo cuando sea un atributo inherente del proceso patológico en sí.

<div class="annotation-correct" markdown="1">
~~~ ann
Dolor crónico de articulaciones interfalángicas
T1 Sign_or_Symptom 0 13 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
… manifiesta dolor recurrente…
T1 Sign_or_Symptom 13 29 
~~~
</div>
