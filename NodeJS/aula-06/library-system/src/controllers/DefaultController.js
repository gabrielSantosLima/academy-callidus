function get(req, resp) {
    return resp.send(
        "<html><body><h1>Curso de Node.js com Márcio</h1></body><html>"
    );
}

export const DefaultController = {
    get
}