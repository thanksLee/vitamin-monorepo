import { ReactNode } from 'react';
import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { TitleProps } from 'antd/es/typography/Title';
import { ParagraphProps } from 'antd/es/typography/Paragraph';

const { Title: AntdTitle, Paragraph: AntdParagraph, Text: AntdText } = Typography;

interface BaseTextProps extends TextProps {
  children: ReactNode;
}

interface BaseTitleProps extends TitleProps {
  children: ReactNode;
}

interface BaseParagraphProps extends ParagraphProps {
  children: ReactNode;
}

// TextWrapper
const BaseTextWrapper = (props: BaseTextProps) => {
  const { children, ...restProps } = props;
  const params: Partial<BaseTextProps> = { ...restProps };

  return <AntdText {...params}>{children}</AntdText>;
};

// TitleWrapper
const BaseTitleWrapper = (props: BaseTitleProps) => {
  const { children, ...restProps } = props;
  const params: Partial<BaseTitleProps> = { ...restProps };

  return <AntdTitle {...params}>{children}</AntdTitle>;
};

// ParagraphWrapper
const BaseParagraphWrapper = (props: BaseParagraphProps) => {
  const { children, ...restProps } = props;
  const params: Partial<BaseParagraphProps> = { ...restProps };

  return <AntdParagraph {...params}>{children}</AntdParagraph>;
};

export { BaseTextWrapper, BaseTitleWrapper, BaseParagraphWrapper };
