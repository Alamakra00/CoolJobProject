import vector from '../../../images/Vector.svg';
import maskGroup from '../../../images/Mask group.svg';
import group from '../../../images/Group.svg';
import group2 from '../../../images/Group 2.svg';
import sony from '../../../images/Sony.svg';

function AdvJobs() {
  const images = [vector, maskGroup, group, group2, sony];

  return (
    <div>
      <p>Помогаем найти работу</p>
      <ul>
        {images.map((src, index) => (
          <li key={index}>
            <img src={src} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvJobs;
