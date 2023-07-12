import styled from '@emotion/styled';
import SuperImposedChart from './chart';
import { useEffect, useState } from 'react';

interface Props {
  className?: string;
}


const ProblemTwo = (props: Props) => {
  const { className } = props;

  const [labels, setLabels] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://testtechnext1-pearl118.b4a.run/search/api/phases/')
      .then(res => res.json())
      .then((_data: any[]) => {
        setLabels(_data.map(({ phase }) => phase || 'NA'));
        setData(_data.map(({ entries }) => entries || 0));
      })

  }, []);

  return (
    <div className={className}>
      <SuperImposedChart
        labels={labels}
        data={data}
      />
    </div>
  );
};

export default styled(ProblemTwo)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

