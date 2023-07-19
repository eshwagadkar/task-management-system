import { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

import { AuthContext } from '../../shared/context/authContext';

import './TaskItem.styles.scss';

const TaskItem = props => {

    const auth = useContext(AuthContext);

    const [showDetail, setShowDetail] = useState(false);
    const [showConfirmModal, setShowConfirmModal ] = useState(false);

    // Handlers to show detailed task 
    const openDetailHandler = () => setShowDetail(true);
    const closeDetailHandler = () => setShowDetail(false);

    // Handlers to show, cancel and confirm a task before deletion. 
    const showDeleteWarningHandler = () => setShowConfirmModal(true);
    const cancelDeleteHandler = () => setShowConfirmModal(false);
    const confirmDeleteHandler = () => { setShowConfirmModal(false); console.log('Deleting') }


    const { title, description, dueDate, id } = props.task;
    return <>
        {/* Modal to display detailed view of a task selected */}
        <Modal 
            show={showDetail}
            onCancel={closeDetailHandler}
            header={title}
            contentClass='task-item__modal-content'
            footerClass='task-item__modal-actions'
            footer={<Button onClick={closeDetailHandler}>CLOSE</Button>}
        >       
         <div className='task-item__detail-container'>{description}</div>               
        </Modal>

        {/* Modal to ensure a task is to be deleted or not */}
        <Modal 
            show={showConfirmModal}
            onCancel={cancelDeleteHandler}
            header='Are you sure?'
            footer={
                <>
                    <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                    <Button danger onClick={confirmDeleteHandler}>DELETE</Button> 
                </>
            }
            footerClass='place-item__modal-actions'
            
        >
            <p>Do you want to proceed and delete the task?</p>
        </Modal>

            <li className='task-item'>
                <Card className='task-item__content'>
                    {/* Task Item Info */}
                    <div className='task-item__info'>
                        <h2>{title}</h2>
                        <h3>{description}</h3>
                        <p>{dueDate}</p>
                    </div>

                    {/* Task Actions */}
                    <div className='task-item__actions'>
                        <Button onClick={openDetailHandler} inverse>View</Button>
                        { auth.isLoggedIn && <Button to={`/tasks/${id}`}>EDIT</Button> }
                        { auth.isLoggedIn && <Button onClick={showDeleteWarningHandler} danger>Delete</Button> }
                        
                    </div>
                </Card>
            </li>
    </>
}

export default TaskItem;