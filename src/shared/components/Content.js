import React, { useState } from 'react';

export const Content = () => {
 const [message] = useState('This content is rendered on Server')   

 return <main>
    <p>{message}</p>
 </main>

}