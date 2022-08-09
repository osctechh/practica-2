const Clase = () => {
    return (  
        <div>
            <h2 className="btn btn-success mt-3 col-md-6">Clases</h2>

        
            <table class="table table-success ">
                <thead>
                    <tr>
                    <th scope="col">Diciplina</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <button>Inscribirse</button>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <button>Inscribirse</button>
                    </tr>
                    <tr>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <button>Inscribirse</button>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default Clase;