

function Cards({ item, handle, cartIteam }) {
    return <div className='col-lg-4 mb-2 mt-2'>
        <div class="card" style={{ width: "15.5rem" }}>
        <img
                      src={`${item.Image}`}
                      class="card-img-top img-thumbnail"
                      alt="..."
                    />
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <h3>{item.price}</h3>
                <button disabled={cartIteam?.some((obj) => obj.id === item.id)}
                    onClick={() => { handle(item) }} href="#" class="btn btn-primary">Add to Card</button>
            </div>
        </div>

    </div>

}
export default Cards;
