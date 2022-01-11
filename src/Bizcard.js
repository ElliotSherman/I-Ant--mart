import React from 'react'

export default function Bizcard() {
    return (
        <div className='container'>
            <h1>Contact Me</h1>
            <div className='d-flex'>
                <img
                    src="https://scontent.ftlv1-1.fna.fbcdn.net/v/t31.18172-8/27797940_10159951782785313_6784151922324518831_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=oZqjHf8CQvsAX-UQgqe&tn=zvw6tLdMv7ld0MX2&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT9YHtbB0Nw8vL423TmKVgUvxdfney2U-Uuk3zWYInu6Qg&oe=6202AD38"
                    className="img-thumbnail w-25 shadow d-block col-4 me-1 m-4"
                    alt="Photo of Elliot Sherman"
                />
                <ul className='d-flex row list-group list-group-flush col ms-2 align-self-center'>
                    <li className='list-group-item'><i className='fas fa-at text-secondary'></i> sheveryosef@gmail.com</li>
                    <li className='list-group-item'><a href='https://www.linkedin.com/in/eliyahu-shvartov' className='link-dark'><i className='fab fa-linkedin text-primary'></i> linkedin.com/ElliotSherman</a></li>
                    <li className='list-group-item'><a href='https://github.com/ElliotSherman' className='link-dark'><i className="fab fa-github link-dark"></i> github.com/ElliotSherman</a></li>
                </ul>
            </div>
            <div className="row g-2 mt-5">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com" />
                        <label for="floatingInputGrid">Email address</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Open this select menu</option>
                            <option value="hr">Recruiter</option>
                            <option value="private">Looking For Collaboration</option>
                            <option value="3"></option>
                        </select>
                        <label for="floatingSelectGrid">Works with selects</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
