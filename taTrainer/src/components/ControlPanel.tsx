import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json'
import { getRandomElement, shuffle } from '../utilities/data';
import { UserList } from './UserList';
import { useState } from 'react';
import { Task } from 'editable-dnd-list';

export type User = Task;
export const LOCAL_STORAGE_USERS = "ta-trainer-users";
export const INITIAL_USERS: User[] = [
    {id: '1', text: "Vincent Ains"},
    {id: '2', text: "Monty"},
    {id: '3', text: "Ja-Ree-Ra"}
]

export function getLocalStorageUsers(): User[] {
    let rawUsers: string|null = localStorage.getItem(LOCAL_STORAGE_USERS);
    if(rawUsers === null){
        return [...INITIAL_USERS];
    } else{
        return JSON.parse(rawUsers);
    }
}

export function ControlPanel({setCard, reveal, answerRevealed}: {setCard: (c: Card)=>void, reveal: (r: boolean) => void, answerRevealed: boolean}): JSX.Element {
    
    const [users, setUsers] = useState<User[]>(getLocalStorageUsers);

    
    function setRandomCard() {
        reveal(false);
        setCard(getRandomElement(CARDS as unknown as Card[]))
    }

    function shuffleUsers() {
        let shuffledUsers: User[] = shuffle(users);
        setUsers([...shuffledUsers]);
        }

    function save(){
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users))
    }

    return <Col>
    <h1>Control Panel</h1>
    <UserList users={users} setUsers={setUsers}></UserList>
    <Button onClick={setRandomCard} className="m-4">Swap Current Card</Button>
    <Button onClick={()=>reveal(!answerRevealed)} className="m-4">Reveal Answer</Button>
    <Button onClick={shuffleUsers} className="m-4">Shuffle Users</Button>
    <Button onClick={save} className="m-4" variant="success">Save</Button>
    </Col>
}