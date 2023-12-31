import { FC } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import classNames from 'classnames';
import { UniformRichText, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { ScreenContainer } from '../../../components/Container';
import { getMediaUrl } from '../../../utilities';
import { FooterProps } from '.';
import Link from 'next/link';

const BuildTimestamp = dynamic(() => import('../../../components/BuildTimestamp'), { ssr: false });

export const Footer: FC<FooterProps> = ({ logo, displayBuildTimestamp = false, copyright, styles, component, context, slots }) => {
  const imageUrl = getMediaUrl(logo);
  return (
    <div className={classNames('bg-secondary', styles?.container)}>
      <ScreenContainer>
        <footer
          className={classNames(
            'footer py-10 flex flex-col-reverse md:flex-row justify-between border-info-content w-full border-t-[1px]',
            styles?.footerSection
          )}
        >
          <div className="w-full md:w-1/2">
            <Link href="/" className="h-12 aspect-square">
              <Image src={imageUrl} width="200" height="50" alt="Uniform" />
            </Link> 
            {displayBuildTimestamp && <BuildTimestamp style={styles?.buildTimestamp} />}
            <div
              className="footer-content text-secondary-content"
              dangerouslySetInnerHTML={{ __html: `2023 ${copyright}` }}
            />
            <div className="footer-content text-secondary-content">
              <UniformRichText
                parameterId="footerText"
                component={component}
              />
            </div>
          </div>
          <UniformSlot
            context={context}
            data={component}
            slot={slots.section}
          />
          <div className="flex">
            <UniformSlot
              context={context}
              data={component}
              slot={slots.iconLinks}
            />
          </div>
        </footer>
      </ScreenContainer>
    </div>
  );
};
