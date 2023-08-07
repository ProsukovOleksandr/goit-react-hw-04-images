import { useState } from 'react';
import PropTypes from "prop-types";
import { SearchbarField, Form, Button, Input } from './Searchbar.styled';
import { FcSearch } from "react-icons/fc";
export const Searchbar = ({onSubmit}) =>{

const [tag, setTag] = useState('');

   const inputChange = event => {     
        setTag(event.currentTarget.value);
    }
    const dataSubmit = event =>{
        event.preventDefault();
        onSubmit(tag);
        reset();
    }
    
    const reset = () => {
        setTag('');
    }
        return (
            <SearchbarField>
                <Form onSubmit={dataSubmit}>
                    <Button type="submit">
                    <FcSearch/>
                    </Button>
                    <Input
                        name="name"
                        value={tag}
                        onChange={inputChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        required
                        placeholder="Search images and photos"
                    />
                </Form>
            </SearchbarField>
        )
    }
Searchbar.propTypes = {
    onSubmit: PropTypes.func
}