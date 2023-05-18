import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [ isExpanded, setIsExpanded] = useState(false);

    const [ noteDetails, setNoteDetails ] = useState({title: "", content: ""});

    function handleChange(event){

        const { name, value } = event.target;

        setNoteDetails((prevVal)=>{
            return {
                ...prevVal,
                [name]: value
            };
        });
    }

    function submitNote(event){
        props.onAdd(noteDetails);
        setNoteDetails({title: "", content: ""});
        event.preventDefault();
    }

    function expand(){
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
            {isExpanded && (
                <input 
                    name="title" 
                    onChange={handleChange} 
                    value={noteDetails.title} 
                    placeholder="Title" 
                />
            )}
            <textarea 
                name="content" 
                onClick={expand} 
                onChange={handleChange} 
                value={noteDetails.content} 
                placeholder="Take a note..." 
                rows={isExpanded?3:1} 
            />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon  />
                </Fab>
            </Zoom>
            
        </form>
        </div>
    );
}

export default CreateArea;  