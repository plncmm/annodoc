---
layout: entry
title: "Has"
shortdef: "Relación entre miembro de la familia y enfermedad"
---

Mediante la anotación de las relaciones se puede determinar el tipo de relación entre dos o más entidades (si es que ésta existe). 


* [Clinical Finding]() o [Disease]() y [Family Member]() pueden relacionarse con la entidad [Has]()

La identificación de los antecedentes familiares implica determinar si existe una relación entre al menos dos entidades previamente anotadas: un sujeto ([Family Member]() mencionado) y la enfermedad ([Disease]()) diagnosticada en dicho sujeto. La relación entre estas dos entidades debe anotarse como se indica. 

<div class="annotation-correct" markdown="1">
~~~ ann
madre con depresion recurrente, t. por acumulacion.
T1 Family_Member 0 5 
T2 Clinical_Finding 10 30 
T3 Abbreviation 32 35 
T4 Clinical_Finding 32 50 
R1 Has Arg1:T1 Arg2:T2
R2 Has Arg1:T1 Arg2:T4
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
FAMILIA BIPARENTAL, FUNCIONAL
T1 Family_Member 0 18 
T2 Clinical_Finding 20 29 
R1 Has Arg1:T1 Arg2:T2
~~~
</div>