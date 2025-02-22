import { BaseButton } from '@workspace/vitamin-ui';
import { logger } from '@workspace/vitamin-core';

const App = () => {
  const handleLoggerClick = () => {
    logger.debug('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
  };
  return (
    <>
      <BaseButton type="primary" onClick={handleLoggerClick}>
        aaaaa
      </BaseButton>
    </>
  );
};

export default App;
