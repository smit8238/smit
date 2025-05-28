import React from 'react'
// import './Home1.css';

export const Shop = () => {
    const styles ={
        col:{
            
            border: '2px solid #000000',
        }
    }
      return (
    <div>
        <div className="container mt-5">
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card" style={styles.col}>
                        <img src="pic1.jpeg" className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">painting 1</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card" style={styles.col}>
                        <img src="pic2.avif" className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">painting 2</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4" style={styles.col}>
                    <div className="card" style={styles.col}>
                        <img src="pic3.webp" className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title">painting 3</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card" style={styles.col}>
                        <img src="pic1.jpeg" className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">painting 1</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card" style={styles.col}>
                        <img src="pic2.avif" className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">painting 2</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card" style={styles.col}>
                        <img src="pic3.webp" className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title">painting 3</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card" style={styles.col}>
                        <img src="pic1.jpeg" className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">painting 1</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card" style={styles.col}>
                        <img src="pic2.avif" className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">painting 2</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card" style={styles.col}>
                        <img src="pic3.webp" className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title">painting 3</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}
