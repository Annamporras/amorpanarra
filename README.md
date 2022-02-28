# Amor Panarra
Third and final project for Ironhack Web Development bootcamp.
Amor Panarra is an online bakery with carefully selected and quality products for bread lovers.
## ENDPOINTS
| HTTP Method | URI path            | Description      |      Protected |
| :---         |   :---:            |          ---:    |           ---: |
| GET          | /                  | Render index page and category   |          |
| GET          | /registro          | Render register page   |    |
| PUT          | /registro          | Handle register page   |    |
| GET          | /inicio-sesion     | Login page                          |    |
| POST         | /inicio-sesion     | Handle login   |    |
| GET          | /mi-perfil/:id     | Render user profile                        |    |
| POST         | /mi-perfil/:id     | Handle user profile (edit)    |    |
| DELETE       | /mi-perfil/:id     | Handle user profile (delete)    |    |
| GET          | /mi-perfil/:id     | Render user profile                        |    |
| GET          | /productos         | List of all products  |    |
| GET          | /productos/panes         | List of bread products  |    |
| GET          | /productos/dulces         | List of sweet products |    |
| GET          | /productos/sin-gluten         | List of gluten-free products  |    |
| GET          | /contacto          | Render contact form   |    |
| GET          | /contacto          | Handle contact form   |    |
| GET          | /perfiles          | Render all users's profiles  | :heavy_check_mark: |
| POST         | /perfiles          | Handle all users's profiles  | :heavy_check_mark: |
| PUT          | /productos/crear   | Create form for new product   | :heavy_check_mark: |
| GET          | /productos/:id     | Render product details   | :heavy_check_mark: |
| GET          | /productos/:id/editar   | Render edit page form   | :heavy_check_mark: |
| POST         | /productos/:id/editar   | Handle edit and delete page form   | :heavy_check_mark: |
| DELETE       | /productos/:id/eliminar   | Delete product btn   | :heavy_check_mark: |