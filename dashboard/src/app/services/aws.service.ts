
import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StoreService } from './store.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AwsService {
  private BASE_URL = `${environment.apiUrl}/aws`;

  constructor(private http: HttpClient, private storeService: StoreService) { }

  public getProfiles(): any {
    return this.http
      .get(`${this.BASE_URL}/profiles`).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getCurrentCost(): any {
    return this.http
      .get(`${this.BASE_URL}/cost/current`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getCostAndUsage(): any {
    return this.http
      .get(`${this.BASE_URL}/cost/history`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getIAMUsers(): any {
    return this.http
      .get(`${this.BASE_URL}/iam/users`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getInstancesPerRegion(): any {
    return this.http
      .get(`${this.BASE_URL}/ec2/regions`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getUsedRegions(): any {
    return this.http
      .get(`${this.BASE_URL}/resources/regions`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getCloudwatchAlarms(): any {
    return this.http
      .get(`${this.BASE_URL}/cloudwatch/alarms`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getLambdaFunctions(): any {
    return this.http
      .get(`${this.BASE_URL}/lambda/functions`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getLambdaInvocationMetrics(): any {
    return this.http
      .get(`${this.BASE_URL}/lambda/invocations`, {
        headers: this.getHeaders(),
      }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getAccountName(): any {
    return this.http
      .get(`${this.BASE_URL}/iam/account`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getNumberOfS3Buckets(): any {
    return this.http
      .get(`${this.BASE_URL}/s3/buckets`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getBucketObjects(): any {
    return this.http
      .get(`${this.BASE_URL}/s3/objects`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getBucketSize(): any {
    return this.http
      .get(`${this.BASE_URL}/s3/size`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getEBS(): any {
    return this.http
      .get(`${this.BASE_URL}/ebs`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getRDSInstances(): any {
    return this.http
      .get(`${this.BASE_URL}/rds/instances`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getDynamoDBTables(): any {
    return this.http
      .get(`${this.BASE_URL}/dynamodb/tables`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getElasticacheClusters(): any {
    return this.http
      .get(`${this.BASE_URL}/elasticache/clusters`, {
        headers: this.getHeaders(),
      }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getVirtualPrivateClouds(): any {
    return this.http
      .get(`${this.BASE_URL}/vpc`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getAccessControlLists(): any {
    return this.http
      .get(`${this.BASE_URL}/acl`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getRouteTables(): any {
    return this.http
      .get(`${this.BASE_URL}/route_tables`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getCloudFrontRequests(): any {
    return this.http
      .get(`${this.BASE_URL}/cloudfront/requests`, {
        headers: this.getHeaders(),
      }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getCloudFrontDistributions(): any {
    return this.http
      .get(`${this.BASE_URL}/cloudfront/distributions`, {
        headers: this.getHeaders(),
      }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getApiGatewayRequests(): any {
    return this.http
      .get(`${this.BASE_URL}/apigateway/requests`, {
        headers: this.getHeaders(),
      }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getApiGatewayRestAPIs(): any {
    return this.http
      .get(`${this.BASE_URL}/apigateway/apis`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getELBRequests(): any {
    return this.http
      .get(`${this.BASE_URL}/elb/requests`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getELBFamily(): any {
    return this.http
      .get(`${this.BASE_URL}/elb/family`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getKMSKeys(): any {
    return this.http
      .get(`${this.BASE_URL}/kms`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getSecurityGroups(): any {
    return this.http
      .get(`${this.BASE_URL}/security_groups`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getKeyPairs(): any {
    return this.http
      .get(`${this.BASE_URL}/key_pairs`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getACMListCertificates(): any {
    return this.http
      .get(`${this.BASE_URL}/acm/certificates`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getACMExpiredCertificates(): any {
    return this.http
      .get(`${this.BASE_URL}/acm/expired`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getUnrestrictedSecurityGroups(): any {
    return this.http
      .get(`${this.BASE_URL}/security_groups/unrestricted`, {
        headers: this.getHeaders(),
      }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getSQSPublishedMessagesMetrics(): any {
    return this.http
      .get(`${this.BASE_URL}/sqs/messages`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getSQSQueues(): any {
    return this.http
      .get(`${this.BASE_URL}/sqs/queues`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getSNSTopics(): any {
    return this.http
      .get(`${this.BASE_URL}/sns/topics`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getActiveMQBrokers(): any {
    return this.http
      .get(`${this.BASE_URL}/mq/brokers`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getKinesisStreams(): any {
    return this.http
      .get(`${this.BASE_URL}/kinesis/streams`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getKinesisShards(): any {
    return this.http
      .get(`${this.BASE_URL}/kinesis/shards`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getGlueCrawlers(): any {
    return this.http
      .get(`${this.BASE_URL}/glue/crawlers`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getGlueJobs(): any {
    return this.http
      .get(`${this.BASE_URL}/glue/jobs`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getDataPipelines(): any {
    return this.http
      .get(`${this.BASE_URL}/datapipeline/pipelines`, {
        headers: this.getHeaders(),
      }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getESDomains(): any {
    return this.http
      .get(`${this.BASE_URL}/es/domains`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getSWFDomains(): any {
    return this.http
      .get(`${this.BASE_URL}/swf/domains`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getOpenSupportTickets(): any {
    return this.http
      .get(`${this.BASE_URL}/support/open`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getSupportTicketsHistory(): any {
    return this.http
      .get(`${this.BASE_URL}/support/history`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getECS(): any {
    return this.http
      .get(`${this.BASE_URL}/ecs`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getRoute53Records(): any {
    return this.http
      .get(`${this.BASE_URL}/route53/records`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getRoute53Zones(): any {
    return this.http
      .get(`${this.BASE_URL}/route53/zones`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getLogsVolume(): any {
    return this.http
      .get(`${this.BASE_URL}/logs/volume`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getConsoleLoginEvents(): any {
    return this.http
      .get(`${this.BASE_URL}/cloudtrail/sign_in_event`, {
        headers: this.getHeaders(),
      }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getLambdaErrors(): any {
    return this.http
      .get(`${this.BASE_URL}/lambda/errors`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getReservedInstances(): any {
    return this.http
      .get(`${this.BASE_URL}/ec2/reserved`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getScheduledInstances(): any {
    return this.http
      .get(`${this.BASE_URL}/ec2/scheduled`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getSpotInstances(): any {
    return this.http
      .get(`${this.BASE_URL}/ec2/spot`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getCostPerInstanceType(): any {
    return this.http
      .get(`${this.BASE_URL}/cost/instance_type`, {
        headers: this.getHeaders(),
      }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getEKSClusters(): any {
    return this.http
      .get(`${this.BASE_URL}/eks/clusters`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getConsoleLoginSourceIps(): any {
    return this.http
      .get(`${this.BASE_URL}/cloudtrail/source_ip`, {
        headers: this.getHeaders(),
      }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getLogsRetentionPeriod(): any {
    return this.http
      .get(`${this.BASE_URL}/logs/retention`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getNatGatewayTraffic(): any {
    return this.http
      .get(`${this.BASE_URL}/nat/traffic`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getOrganization(): any {
    return this.http
      .get(`${this.BASE_URL}/iam/organization`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getServiceLimits(): any {
    return this.http
      .get(`${this.BASE_URL}/service/limits`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getEmptyBuckets(): any {
    return this.http
      .get(`${this.BASE_URL}/s3/empty`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getDetachedElasticIps(): any {
    return this.http
      .get(`${this.BASE_URL}/eip/detached`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getRedshiftClusters(): any {
    return this.http
      .get(`${this.BASE_URL}/redshift/clusters`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getVPCSubnets(): any {
    return this.http
      .get(`${this.BASE_URL}/vpc/subnets`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  public getForecastPrice(): any {
    return this.http
      .get(`${this.BASE_URL}/cost/forecast`, { headers: this.getHeaders() }).pipe(
        catchError((err) => {
          let payload = JSON.parse(err._body);
          if (payload && payload.error) this.storeService.add(payload.error);
          return observableThrowError(err.json().error);
        }));
  }

  private getHeaders(): any {
    let headers = new HttpHeaders();
    headers = headers.set("profile", localStorage.getItem("profile"));
    return headers;
  }
}