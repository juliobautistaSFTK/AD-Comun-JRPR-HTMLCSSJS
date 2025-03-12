# **Instrucciones para el instructor**
[Ver](Instrucciones/Readme_instructor.md)


# **Instrucciones para el participante**
[Ver](Instrucciones/Comun.md)

# **Uso de Codespaces**
[Ver](Instrucciones/Readme_action_codespaces.md)


# **Ejercicio INTEGRACIÓN CONTINUA CON LIQUIBASE**

Prerrequisito: Haber tomado el taller de Integración continua de base de datos con liquibase, dado que ahí se generaran los ambientes y xml entre desarrollo y pruebas.

# **Objetivos:**
1.- Crear una nueva tabla en el ambiente de desarrollo utilizando xml y liquibase, la tabla se debe llamar distancia, con 2 campos id de tipo entero y descripción de tipo caracter de 100.

2.- Migrar esta nueva tabla al ambiente de pruebas utilizando liquibase y XML.

3.- Crear un nuevo contenedor para mysql versión 8 que servirá como producción modificando el docker-compose y levantándolo de nuevo.

4.- Migrar todos los cambios que existenen pruebas hacia producción por medio de liquibase y XML.

5.- Hacer commit de todos los archivos modificados o generados, así como un screenshot de la base de datos de producción con los cambios implementados.

# **Cómo evaluar:**
Se evaluará cada xml y archivos de ambientación creados tenendo un valor del 70% de la calificación.

El screenshot de la base de datos de producción con los cambios de pruebas tendrá un valor del 30% de la calificación

# Evitar el plagio
Es de vital importancia no copiar la solución de otro colaborador, esto generará una práctica desleal y se levantará un Warning.


#### Ambientación del ejercicio 
Este ejercicio contiene instrucciones que ambientan e instalan lo necesario para el ejercicio, a excepción que el ejercicio incluya ambientar o instalar.


#### Codespaces

GitHub Codespaces es un entorno de desarrollo integrado (IDE) basado en la web, completamente configurado y alojado en la nube, que permite a los desarrolladores escribir, compilar, probar y depurar código directamente desde GitHub. Codespaces proporciona una máquina virtual (VM) con todas las herramientas necesarias para trabajar en un proyecto, de modo que puedes desarrollar sin necesidad de configurar manualmente un entorno local.

Este ejercicio está configurado para crear un Codespace y se ejecuten las instrucciones necesarias para ambientar una maquina virtual y puedas hacer el ejercicio, es importante no alterar el Codespace a menos que el modificarlo sea parte del ejercicio.
