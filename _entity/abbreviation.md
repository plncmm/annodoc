---
layout: entry
title: "Abreviación"
shortdef: "Procedimiento lingüístico de hacer más corta la morfología de ciertas palabras"
---

## Definición

Abreviación es el procedimiento lingüístico de hacer más corta la morfología de ciertas palabras. Se realiza empleando métodos como:

* Acortamiento: se elimina partes de las palabras al comienzo o al final (ej: "bicicleta" en bici, “autobús” en bus, o algunos más informales como poli por policlínico o refri por refrigerador) [3].
* Abreviatura: consiste en la representación escrita de una palabra o grupo de palabras con solo una o varias de sus letras. Pueden ser de tipo personal (generadas para uso propio en escritura privada) o convencional (reconocidas y empleadas comúnmente) [4]. 
* Contracción: se eliminan las letras centrales de la palabra y se dejan solo las letras más representativas (por ejemplo, avda.) [5].

Las abreviaciones incluyen los casos de siglas (creación de palabras a partir de cada letra inicial de los términos principales de una expresión compleja, como por ejemplo _ONU_ por Organización de las Naciones Unidas) y acrónimos (ciertas siglas que llegan a convertirse en vocablos comunes como _ovni_, _pyme_ y _sida_).

## Reglas positivas

* Etiquetar todas las abreviaciones tanto de tipo personal como convencional.

<div class="annotation-correct" markdown="1">
~~~ ann
Antec de repitencia …
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Pcte persiste Psicótico …
T1 Abbreviation 0 4 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
… resulta normal ECG y Ecocardiograma …
T1 Abbreviation 17 20 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Inicio de quetiapina 25mg
T1 Abbreviation 0 5 
~~~
</div>

* Etiquetar las abreviaciones de una letra o símbolo no estándar.

<div class="annotation-correct" markdown="1">
~~~ ann
TUS x OH
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
p hep normales
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
MP  (+)
T1 Abbreviation 0 5 
~~~
</div>

* Etiquetar todos los símbolos de palabras científicas o técnicas formados por letras convencionales que tienen validez internacional: Ag, Fe.

<div class="annotation-correct" markdown="1">
~~~ ann
Na 141, K 4.1, Cl 103
T1 Abbreviation 0 5 
~~~
</div>

* Etiquetar las abreviaciones numéricas ordinales conformadas por números y letras.

<div class="annotation-correct" markdown="1">
~~~ ann
10mo día de hospitalización
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Lorazepam 1/2 ampolla  c/u
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
c/8 horas
T1 Abbreviation 0 5 
~~~
</div>

## Reglas negativas

* NO incluir en la etiqueta los puntos, aunque sean puntos abreviativos. 

<div class="annotation-correct" markdown="1">
~~~ ann
Ac. Valproico
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Dra. Juanita Pérez
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
… despertó a las 7:00 hrs. Plan: …
T1 Abbreviation 0 5 
~~~
</div>

* NO incluir en la etiqueta los paréntesis u otros separadores que no formen parte de la abreviación.

<div class="annotation-correct" markdown="1">
~~~ ann
Trastorno estrés post traumático complejo (DESNOS) 
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
Trastorno estrés post traumático complejo (DESNOS) 
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
FP/FR de …
T1 Abbreviation 0 5 
~~~
</div>

* NO etiquetar abreviaciones correspondientes a nombres o apellidos.

<div class="annotation-incorrect" markdown="1">
~~~ ann
Dra. Juanita Pérez Z. 
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
Dra. J. Pérez. 
T1 Abbreviation 0 5 
~~~
</div>

* NO etiquetar las abreviaciones numéricas ordinales convencionales.

<div class="annotation-incorrect" markdown="1">
~~~ ann
8º día de hospitalización
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
Hoy se realizará 3ª sesión de … 
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
22º día de hospitalización
T1 Abbreviation 0 5 
~~~
</div>

## Reglas multipalabra

* Anotar como una sola mención las abreviaciones que aparecen en el texto separados sólo por espacios o por guiones y que componen una entidad única.

<div class="annotation-correct" markdown="1">
~~~ ann
… diagnósticos de TAB I, y sospecha de …
T1 Abbreviation 0 5 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
…. ERC-IV recientemente pesquisado…. 
T1 Abbreviation 0 5 
~~~
</div>

* Anotar como una sola mención las abreviaciones que aparecen en el texto aparentemente compuestas por dos palabras pero que componen una entidad única.

<div class="annotation-correct" markdown="1">
~~~ ann
… bioquímico destacan hiperCa 10.5, HipoNa 132
T1 Abbreviation 0 5 
~~~
</div>
