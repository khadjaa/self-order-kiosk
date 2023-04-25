import styled from 'styled-components';

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

type PopupWindowPropsType = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const PopupWindow: React.FC<PopupWindowPropsType> = ({ isOpen, onClose, children }) => {

    setTimeout(() => {
        onClose()
    },3000)

    return (
        <>
            {isOpen && (
                <Popup>
                    <PopupContent>
                        {children}
                    </PopupContent>
                </Popup>
            )}
        </>
    );
};

