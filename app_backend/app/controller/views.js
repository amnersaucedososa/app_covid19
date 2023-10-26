/*
*   VISTAS
*/
    // Función para renderizar la vista en el layout común
    const renderView = (req, res, viewName, pageTitle, data) => {
        const urlActual = req.url;
        const loggedin = req.session.loggedin || false; // Si no está definido, asume que no está autenticado
        res.render('layout', {
            pageTitle,
            content: viewName,
            header: 'header',
            sidebar: 'sidebar',
            footer: 'footer',
            urlActual,
            loggedin,
            data, // Incluye la variable de datos en el objeto de contexto
            danger: req.flash('danger'),
            success: req.flash('success'),
            form_create:'store',
            form_edit: 'edit'
        });
    };
    const index = (req, res) => {
        tMenu.getAll((error, resultados) => {
            if (error) {
                res.status(500).json({ error: 'Error al obtener los elementos del menú' });
            } else {
                renderView(req, res, 'menu/index', 'Listado Menu', resultados); // Pasa la variable de datos
            }
        });
    };
    const store = (req, res) => {
        renderView(req, res, 'menu/store', 'Crear Menu');
    };
    const edit = (req, res) => {
        const idMenu = req.params.idMenu;
        if(idMenu>0){
            tMenu.getById(idMenu, (error, resultado) => {
                if (error) {
                    // res.status(500).json({ error: 'Error al obtener un elemento del menú' });
                    req.flash('danger', 'Error al obtener un elemento del menú');
                    res.redirect('/menu/index');
                } else if (!resultado) {
                    // res.status(404).json({ error: 'Elemento del menú no encontrado' });
                    req.flash('danger', 'Elemento del menú no encontrado' );
                    res.redirect('/menu/index');
                } else {
                    // res.json(resultado);
                    renderView(req, res, 'menu/edit', 'Editar Menu', resultado);
                }
            });
        }else{
            req.flash('danger', "Error este elemento no existe.");
            res.redirect('/menu/index');
        }
    };
    const show = (req, res) => {
        renderView(req, res, 'menu/show', 'Ver Menu');
    };
/*
*   END VISTAS
*/




