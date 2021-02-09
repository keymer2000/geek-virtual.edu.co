import React from 'react'

export default function PortfolioMain() {
    return (
        <div>
            <h3 className="text-center mt-5">Cronograma de clases y actividades programadas</h3>
            <div className="row  mt-5">
                <div className="col-1 " ></div>
                <div className="col-10">
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%2326ddc8&amp;ctz=America%2FBogota&amp;src=Y2FsZW5kYXJpb2FjYWRlbWlhZ2Vla0BnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4uY28jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043" style={{ border: "solid 1px #777", width: "100%", height: "600px", frameborder: "0", scrolling: "no" }}></iframe>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}
