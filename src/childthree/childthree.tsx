import React from 'react';
import './childthree.css'

export const Childthree = () => (<div className="childthree">
    <div style={{flexGrow: 1}}>third child</div>
    <div style={{flexGrow: 1, backgroundColor: 'cornflowerblue'}}>fourth child</div>
</div>)

export default Childthree;