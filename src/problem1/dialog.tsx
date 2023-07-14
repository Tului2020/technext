import styled from '@emotion/styled';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface QueryResult {
  id: number;
  text: string;
  date: string;
  phase: string;
}

interface Props {
  data?: QueryResult;
  onCloseDialog: () => void;
}

const RowDialog = (props: Props) => {
  const { data, onCloseDialog } = props;

  return (
    <Dialog
      open={!!data}
      onClose={onCloseDialog}
    >
      <DialogTitle
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div>Patent Info</div>
        <IconButton onClick={onCloseDialog}><CloseIcon /></IconButton>
      </DialogTitle>
      <DialogContent>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
          <div>{data?.id}</div>
          <div>{data?.phase}</div>
          <div>{data?.date}</div>
        </div>
        <div
          style={{
            padding: 10
          }}>
          {data?.text}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default styled(RowDialog)`

`;
