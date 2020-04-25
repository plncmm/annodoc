---
layout: entry
title: "Family Member"
shortdef: "Etiqueta para miembros de la familia"
---

## Reglas positivas

* Etiquetar todos los familiares consanguíneos y no consanguíneos mencionados

<div class="annotation-correct" markdown="1">
~~~ ann
… primero por su hijo, luego de sus hermanos … 
T1 Family_Member 17 21 
T2 Family_Member 36 44 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
… a su madre por parte de su cuñado … 
T1 Family_Member 7 12 
T2 Family_Member 29 35 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
… pero ex esposa refiere que… 
T1 Family_Member 7 16 
~~~
</div>

* Etiquetar todas las menciones de antecedentes familiares positivos y negativos en las que no se especifique un miembro de la familia en particular pero exista un sujeto dentro de la oración.

<div class="annotation-correct" markdown="1">
~~~ ann
ANTECEDENTES DE SUICIDIO EN FAMILIA…
T1 Family_Member 28 35 
~~~
</div>

## Reglas negativas

* NO incluir en la etiqueta palabras modificadoras de los familiares.

<div class="annotation-incorrect" markdown="1">
~~~ ann
… reciente de abuelo materno, … 
T1 Family_Member 21 28 
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
… hija del medio del matrimonio … 
T1 Family_Member 7 16 
~~~
</div>

* Cuando se mencione el lado de la familia (materno o paterno), este NO debe incluirse en la etiqueta, pero debe anotarse como un atributo de la entidad

<div class="annotation-correct" markdown="1">
~~~ ann
… abuelo materno con Diabetes Mellitus tipo 2… 
T1 Family_Member 2 8 
A1 Maternal T1
~~~
</div>

<div class="annotation-incorrect" markdown="1">
~~~ ann
… abuelo materno con Diabetes Mellitus tipo 2… 
T1 Family_Member 2 16 
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
Depresion Abuela, Madre, Tios paternos.
T1 Family_Member 10 16 
T2 Family_Member 18 23 
T3 Family_Member 25 29 
A1 Paternal T1
A2 Paternal T2
A3 Paternal T3
~~~
</div>

<img src="https://github.com/fvillena/annodoc/raw/master/static/img/image5.jpg" width="100%"/>

Ejemplo de anotación de atributos (materno o paterno) en miembros de la familia.
