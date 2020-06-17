---
layout: entry
title: "Has"
shortdef: "Relación entre entidades"
---

Mediante la anotación de las relaciones se puede determinar el tipo de relación entre dos o más entidades (si es que ésta existe), por ejemplo entre [Miembro de la Familia](../entity/family_member) y [Enfermedad](../entity/disease) o entre [Procedimiento](../entity/procedure) y [Resultado de Laboratorio o Test](../finding/Laboratory%20or%20Test%20Result). 

La identificación de los antecedentes familiares implica determinar si existe una relación entre  un sujeto explicita o implicitamente mencionado (ver [Caso Especial](../entity/disease)) y una enfermedad o un hallazgo reportado como diagnosticado/padecido en dicho sujeto. Cuando el sujeto es mencionado explicitamente se emplea la entidad [Has]() para relacionar las entidades.

* La relación entre estas dos entidades debe anotarse como se indica, respetando la direccionalidad (desde el Miembro de la Familia hacia la Enfermedad o Hallazgo). 

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

* Las palabras *materno*, *paterno* o *familia* deben ser anotadas como miembros de la familia cuando NO se haga referencia directa al miembro de la familia con la enfermedad.

<div class="annotation-correct" markdown="1">
Correcto: Nótese que se trata de un antecedente familiar negado.
~~~ ann
PACIENTE SIN A. PATERNO NI MATERNO DE DIABETES
T1 Family_Member 16 23 
T2 Family_Member 27 34 
T3 Abbreviation 13 14 
T4 Disease 38 46 
A1 Negated T4
R1 Has Arg1:T1 Arg2:T4
R2 Has Arg1:T2 Arg2:T4
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

* La relación entre dos entidades debe anotarse como se indica, respetando la direccionalidad (desde el Procedimiento - de Laboratorio, Terapéutico o Diagnóstico - hacia el Resultado).

<div class="annotation-correct" markdown="1">
~~~ ann
Rx columna total desnivel pelviano de 0.4cm
T1 Diagnostic_Procedure 0 16 
T2 Laboratory_or_Test_Result 17 34 
R1 Has Arg1:T1 Arg2:T2
~~~
</div>

<div class="annotation-correct" markdown="1">
~~~ ann
G1 P1 A0 PAP ATIPICO CELULAS ESCAMOSAS ATIPICAS DE SIGNIFICADO INDETERMINADO
T1 Diagnostic_Procedure 9 12 
T2 Laboratory_or_Test_Result 13 20
T3 Laboratory_or_Test_Result 21 76 
R1 Has Arg1:T1 Arg2:T2
R2 Has Arg1:T1 Arg2:T3
~~~
</div>

